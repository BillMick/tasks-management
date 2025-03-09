const { client } = require("../../infrastructure/database/database");

exports.add = async (data, response) => {
    let required_keys = ["title"];
    const missing_keys = required_keys.filter((key) => !(key in data.body));
    if (missing_keys.length > 0) {
        return response.status(400).json({
          error: "Bad Request.",
          message: `Missing keys: ${missing_keys.join(", ")}`,
        });
    }
    else {
        let task = data.body;
        const new_task = await client.task.create({
            data: {
                title: task.title,
                ...(task.description ? { description: task.description } : {}),
                ...(task.priority ? { priority: parseInt(task.priority) } : {}),
                userId: data.user.userId,
            },
        })
        console.log(new_task);
    }
    return response.status(200).json({
        message: "Task successfully inserted."
    });
}