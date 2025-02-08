const { client } = require("../../infrastructure/database/database");

exports.update = async (data, response) => {
    let required_keys_params = ["id"];
    let required_keys_body = ["title"];
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
        const tag = await client.tag.update({
            where: {
                id: data.params.id
            },
            data: {
                title: data.body.title
            }
        })
        console.log(tag);
        response.status(200).json({
            message: "tag successfully updated.",
            tag: tag
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
      const updatedtag = await client.tag.update({
        where: { id: id },
        data: updateData,
      });
      return response.json({ tag: updatedtag });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Problem with server. Contact Administrator." });
    }
  };
  