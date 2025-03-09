const { Router } = require("express");
const { client } = require("../../infrastructure/database/database");
const add = require("./add.js");
const read = require("./read.js");
const update = require("./update.js");

const router = Router();


router.get("/", async (data, response) => {
    const tags = await client.tag.findMany();
    response.status(200).json(tags);
});

router.post("/", add.add);

router.get("/:id", read.readByID);

router.get("/title/:title", read.readByTitle);

router.get("/delete/:id", async (data, response) => {
    const tag = await client.tag.delete({
        where: { id: data.params.id }
    });
    if (tag) {
        return response.status(200).json({
            message: "tag successfully deleted.", 
            tag: tag
        })
    }
    return response.status(400).json({
        message: "tag not deleted."
    })
});

router.put("/:id", update.update); // update tag data (title)

router.get("/connect/:tag_id/:task_id", async (data, response) => {
    const tag = await client.tag.update({
        where: { id: data.params.tag_id },
        data: {
            tasks: {
                connect: { id: data.params.task_id },
            },
        },
    });
    response.status(200).json({tag: tag});
});

router.get("/disconnect/:tag_id/:task_id", async (data, response) => {
    const tag = await client.tag.update({
        where: { id: data.params.tag_id },
        data: {
            tasks: {
                disconnect: { id: data.params.task_id },
            },
        },
    });
    response.status(200).json({tag: tag});
});

module.exports = router;