const { client } = require("../../infrastructure/database/database");

exports.update = async (data, response) => {
    let required_keys_params = ["id"];
    let required_keys_body = ["title", "description", "status", "priority"];
    const missing_keys_params = required_keys_params.filter((key) => !(key in data.params));
    const missing_keys_body = required_keys_body.filter((key) => !(key in data.body));
    if (missing_keys_params.length > 0) {
        return response.status(400).json({
          error: "Bad Request.",
          message: `Missing keys: ${missing_keys_params.join(", ")}`,
        });
    }
    else if (missing_keys_body.length > 0) {
        return response.status(400).json({
            error: "Bad Request.",
            message: `Missing keys: ${missing_keys_body.join(", ")}`,
          });
    }
    else {
        const task = await client.task.update({
            where: {
                id: data.params.id,
                userId: data.user.userId
            },
            data: {
                title: data.body.title,
                description: data.body.description,
                priority: data.body.priority,
                status: data.body.status,
            }
        })
        console.log(task);
        response.status(200).json({
            message: "Task successfully updated.",
            task: task
        });
    }
}

exports.updatePartially = async (data, response) => {
    let id = data.params.id;
    let title = data.body.title;
    let description = data.body.description;
    let status = data.body.status;
    let priority = data.body.priority;
  
    const updateData = {};
  
    if (title) updateData.title = title; 
    if (description) updateData.description = description;
    if (status) updateData.status = status; 
    if (priority) updateData.priority = priority;
  
    try {
      const updatedTask = await client.task.update({
        where: {
          id: id,
          userId: data.user.userId
        },
        data: updateData,
      });
      return response.json({ task: updatedTask });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Problem with server. Contact Administrator." });
    }
  };
  