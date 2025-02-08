const { Router } = require("express");

const router = Router();

router.use("/tasks", require("./task"));

module.exports = router;