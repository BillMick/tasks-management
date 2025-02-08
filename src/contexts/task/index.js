const { Router } = require("express");
const { client } = require("../../infrastructure/database/database");
const add = require("./add.js");
const read = require("./read.js");
const update = require("./update.js");

const router = Router();


router.get("/", async (req, res) => {
    const tasks = await client.task.findMany({
        include: {
            tags: true,
        }
    });
    res.status(200).json(tasks);
});

router.post("/", add.add);

router.get("/:id", read.readByID);

router.get("/title/:title", read.readByTitle);

router.get("/priority", read.readByPriorityOrder);

router.get("/priority/:priority", read.readByPriority);

router.get("/delete/:id", async (data, response) => {
    const task = await client.task.delete({
        where: { id: data.params.id }
    });
    if (task) {
        response.status(200).json({
            message: "Task successfully deleted.", 
            task: task
        })
    }
    response.status(400).json({
        message: "task not deleted."
    })
});

router.put("/:id", update.update); // update tasks data (title, description, ...)

router.patch("/:id", update.updatePartially); // update partially tasks data (title, description, ...)

router.get("/connect/:task_id/:tag_id", async (data, response) => {
    const task = await client.task.update({
        where: { id: data.params.task_id },
        data: {
            tags: {
                connect: { id: data.params.tag_id },
            },
        },
    });
    response.status(200).json({task: task});
});

router.get("/disconnect/:task_id/:tag_id", async (data, response) => {
    const task = await client.task.update({
        where: { id: data.params.task_id },
        data: {
            tags: {
                disconnect: { id: data.params.tag_id },
            },
        },
    });
    response.status(200).json({task: task});
});

module.exports = router;