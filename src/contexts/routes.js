const { Router } = require("express");

const router = Router();

router.use("/tasks", require("./task"));
router.use("/tags", require("./tag"));

router.get("/limit", async (data, response) => {
    const page = parseInt(data.query.page) || 1;
    const pageSize = 10;
    const skip = (page - 1) * pageSize;
    try {
        const tasks = await client.task.findMany({
            skip: skip,
            take: pageSize,
            orderBy: { priority: 'asc' },
            include: { tags: true }
        });
    response.status(200).json({ tasks: tasks, page: page });
    } catch (error) {
        response.status(500).json({
            status: false,
            error: "Error fetching tasks. Please try again later."
        });
    }
});

module.exports = router;