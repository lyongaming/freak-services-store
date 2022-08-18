const { getService, getServicesNames } = require("../controllers/ServiceController");

const router = require("express").Router();

router.get("/", getServicesNames);

router.get("/:service_name", getService);

module.exports = router;