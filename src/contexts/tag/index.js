const { Router } = require("express");
const { client } = require("../../infrastructure/database/database");
const add = require("./add.js");
const read = require("./read.js");
const update = require("./update.js");

const router = Router();


router.get("/", async (req, res) => {
    const tags = await client.tag.findMany();
    res.status(200).json(tags);
});

router.post("/", add.add);

router.get("/:id", read.readByID);

router.get("/title/:title", read.readByTitle);

router.get("/delete/:id", async (data, response) => {
    const tag = await client.tag.delete({
        where: { id: data.params.id }
    });
    if (tag) {
        response.status(200).json({
            message: "tag successfully deleted.", 
            tag: tag
        })
    }
    response.status(400).json({
        message: "tag not deleted."
    })
});

router.put("/:id", update.update); // update tag data (title)

module.exports = router;