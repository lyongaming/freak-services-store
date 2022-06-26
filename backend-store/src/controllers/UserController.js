const { response } = require("express");
const { getUserNames } = require("../models/UserModel");

const getUsers = async(req, res = response) => {

    await getUserNames(res);

};

module.exports = {
    getUsers
};