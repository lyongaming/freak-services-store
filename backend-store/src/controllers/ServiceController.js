const { response } = require("express");
const { getServiceByName, getNames } = require("../models/ServiceModel");

const getService = async(req, res = response) => {

    const { service_name } = req.params;
    await getServiceByName(service_name, res);

};

const getServicesNames = async(req, res = response) => {
    await getNames(res);
}

module.exports = {
    getService,
    getServicesNames
}