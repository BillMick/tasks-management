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

router.get("/desc", async (data, response) => {
    const tasks = await client.task.findMany({
        orderBy: {
            priority: 'asc',
        },
        include: {
            tags: true
        }
    });
    response.status(200).json({ tasks: tasks });
});

router.get("/byTag/:tag_id", async (data, response) => {
    try {
        const tag_id = data.params.tag_id;
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
        response.status(200).json({ tasks: tasks });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            status: false,
            error: "Error fetching tasks by tag. Please try again later."
        });
    }
});

module.exports = router;