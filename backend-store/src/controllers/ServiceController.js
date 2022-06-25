const { response } = require("express");

const getService = (req, res = response) => {

    console.log("Mensaje totalmente profesional, por supuesto que no escribi qlo antes")

};

module.exports = {
    getService
}