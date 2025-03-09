const { Router } = require("express");

const router = Router();

const { client } = require("../infrastructure/database/database");

router.use("/tasks", require("./task"));
router.use("/tags", require("./tag"));
router.use("/users", require("./user"));

const jwt = require('jsonwebtoken');
// const authenticateJWT = require("task/index.js")
function authenticateJWT(data, response, next) {
  const token = data.header('Authorization')?.split(' ')[1];

  if (!token) {
    return response.status(401).json({ error: 'Access denied. No token provided.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return response.status(403).json({ error: 'Invalid or expired token.' });
    }
    data.user = decoded;
    next();
  });
}

router.get("/limit", authenticateJWT, async (data, response) => {
    const page = parseInt(data.query.page) || 1;
    const pageSize = 10;
    const skip = (page - 1) * pageSize;
    try {
        const tasks = await client.task.findMany({
            where: { userId: data.user.userId },
            skip: skip,
            take: pageSize,
            orderBy: { priority: 'asc' },
            include: { tags: true }
        });
    return response.status(200).json({ tasks: tasks, page: page });
    } catch (error) {
        response.status(500).json({
            status: false,
            error: "Error fetching tasks. Please try again later."
        });
    }
});

router.get("/desc", authenticateJWT, async (data, response) => {
    const tasks = await client.task.findMany({
        where: { userId: data.user.userId },
        orderBy: { priority: 'asc' },
        include: { tags: true }
    });
    response.status(200).json({ tasks: tasks });
});

router.get("/byTag", authenticateJWT, async (data, response) => {
    try {
        const { tag_id } = data.query;
        
        if (!tag_id) {
            return response.status(400).json({
                status: false,
                error: "Tag ID is required to filter tasks."
            });
        }
        const tasks = await client.task.findMany({
            where: { tags: { some: { id: tag_id } } },
            include: { tags: true }
        });
        if (tasks.length === 0) {
            return response.status(404).json({
                status: false,
                message: "No tasks found for the provided tag."
            });
        }
        return response.status(200).json({ tasks: tasks });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            status: false,
            error: "Error fetching tasks by tag. Please try again later."
        });
    }
});

module.exports = router;