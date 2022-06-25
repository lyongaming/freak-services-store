const { getService } = require("../controllers/ServiceController");

const router = require("express").Router();

router.get("/", getService);

module.exports = router;