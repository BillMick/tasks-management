const { Router } = require("express");
const { client } = require("../../infrastructure/database/database");
const add = require("./add.js");
const read = require("./read.js");
const update = require("./update.js");

const router = Router();

const jwt = require('jsonwebtoken');

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

router.get("/", authenticateJWT, async (data, response) => {
    const tasks = await client.task.findMany({
        where: { userId: data.user.userId },
        include: {
            tags: true,
        }
    });
    response.status(200).json(tasks);
});

router.post("/", authenticateJWT, add.add);

router.get("/:id", authenticateJWT, read.readByID);

router.get("/title/:title", authenticateJWT, read.readByTitle);

router.get("/priority", authenticateJWT, read.readByPriorityOrder);

router.get("/priority/:priority", authenticateJWT, read.readByPriority);

router.get("/delete/:id", authenticateJWT, async (data, response) => {
    const task = await client.task.delete({
        where: { 
            id: data.params.id, 
            userId: data.user.userId
        }
    });
    if (task) {
        return response.status(200).json({
            message: "Task successfully deleted.", 
            task: task
        })
    }
    response.status(400).json({
        message: "task not deleted."
    })
});

router.put("/:id", authenticateJWT, update.update);

router.patch("/:id", authenticateJWT, update.updatePartially);

router.get("/connect/:task_id/:tag_id", authenticateJWT, async (data, response) => {
    const task = await client.task.update({
        where: { 
            id: data.params.task_id,
            userId: data.user.userId
        },
        data: {
            tags: {
                connect: { id: data.params.tag_id },
            },
        },
    });
    response.status(200).json({task: task});
});

router.get("/disconnect/:task_id/:tag_id", authenticateJWT, async (data, response) => {
    const task = await client.task.update({
        where: {
            id: data.params.task_id,
            userId: data.user.userId
        },
        data: {
            tags: {
                disconnect: { id: data.params.tag_id },
            },
        },
    });
    response.status(200).json({task: task});
});


module.exports = router;