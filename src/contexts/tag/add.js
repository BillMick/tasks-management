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
        let tag = data.body;
        const new_tag = await client.tag.create({
            data: { 
                title: tag.title,
            },
        })
        console.log(new_tag);
    }
    return response.status(200).json({
        message: "tag successfully inserted."
    });
}