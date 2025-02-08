const { Router } = require("express");

const router = Router();

router.use("/tasks", require("./task"));
router.use("/tags", require("./tag"));

module.exports = router;