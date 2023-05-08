require("../config/connection.js");
const mongoose = require("mongoose");

module.exports = {
    Media: require("./media.js"),
    User: require("./user.js"),
};
