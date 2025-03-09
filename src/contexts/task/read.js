const { client } = require("../../infrastructure/database/database");

exports.readByID = async (data, response) => {
    let required_keys = ["id"];
    const missing_keys = required_keys.filter((key) => !(key in data.params));
    if (missing_keys.length > 0) {
        return response.status(400).json({
          error: "Bad Request.",
          message: `Missing keys: ${missing_keys.join(", ")}`,
        });
    }
    else {
        const task = await client.task.findUnique({
            where: {
                id: data.params.id,
                userId: data.user.userId
            },
            include: {
              tags: true,
            }
        });
        console.log(task);
        response.status(200).json({
            task: task
        });
    }
}


exports.readByTitle = async (data, response) => {
    let required_keys = ["title"];
    const missing_keys = required_keys.filter((key) => !(key in data.params));
    if (missing_keys.length > 0) {
        return response.status(400).json({
          error: "Bad Request.",
          message: `Missing keys: ${missing_keys.join(", ")}`,
        });
    }
    else {
        let task_title = data.params.title;
        const task = await client.task.findFirst({
            where: {
                title: task_title,
                userId: data.user.userId
            },
            include: {
                tags: true,
            }
        })
        console.log(task);
        response.status(200).json({
            task: task
        });
    }
}

exports.readByPriority = async (data, response) => {
    const priority = data.params.priority;
  
    if (priority) {
      if (isNaN(priority)) {
        return response.status(400).json({ error: "Invalid priority value." });
      }
  
      try {
        const tasks = await client.task.findMany({
          where: {
            priority: parseInt(priority),
            userId: data.user.userId
          },
          include: {
              tags: true,
          }
        });
        return response.json({ tasks });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Problem with server. Contact Administrator." });
      }
    } 
    // else {
    //   try {
    //     const tasks = await prisma.task.findMany();
  
    //     return res.json({ tasks });
    //   } catch (error) {
    //     console.error(error);
    //     return res.status(500).json({ error: "Problem with server. Contact Administrator." });
    //   }
    // }
  };

  exports.readByPriorityOrder = async (data, response) => {
      try {
        const tasks = await client.task.findMany({
          where: { userId: data.user.userId },
          orderBy: { priority: 'desc', }
        });
        return response.json({ tasks });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ error: "Problem with server. Contact Administrator." });
      }
    }