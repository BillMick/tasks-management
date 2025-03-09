const { Router } = require("express");
const { client } = require("../../infrastructure/database/database");
const register = require("./register.js");
const login = require("./login.js");

const router = Router();

router.get("/", async (data, response) => {
    const users = await client.user.findMany({
        select: {
            id:true,
            username: true
        }
    });
    response.status(200).json(users);
});

router.post("/", register.register);

router.post('/login', login.login);


module.exports = router;