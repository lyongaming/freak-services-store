const router =  require("express").Router();

const { getUsers, getUser } = require("../controllers/UserController");

router.get("/", getUsers);

router.get("/:user_name", getUser);

module.exports = router;