const { response } = require("express");
const { getServiceByName } = require("../models/ServiceModel");

const getService = async(req, res = response) => {

    const { service_name } = req.params;
    await getServiceByName(service_name, res);

};

module.exports = {
    getService
}