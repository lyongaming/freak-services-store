const { getService } = require("../controllers/ServiceController");

const router = require("express").Router();

router.get("/:service_name", getService);

module.exports = router;