const { response } = require("express");
const { getUserNames, getUserByName } = require("../models/UserModel");

const getUsers = async(req, res = response) => {

    await getUserNames(res);

};

const getUser = async(req, res = response) => {
    const { user_name } = req.params;
    await getUserByName(user_name, res);
}

module.exports = {
    getUsers,
    getUser
};