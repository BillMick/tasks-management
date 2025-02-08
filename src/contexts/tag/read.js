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
        const tag = await client.tag.findUnique({
            where: {
                id: data.params.id
            },
        });
        console.log(tag);
        response.status(200).json({
            tag: tag
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
        let tag_title = data.params.title;
        const tag = await client.tag.findFirst({
            where: {
                title: tag_title
            },
        });
        console.log(tag);
        response.status(200).json({
            tag: tag
        });
    }
}
