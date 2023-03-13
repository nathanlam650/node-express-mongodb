const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.volunteers = require("./volunteers.model.js")(mongoose);
db.organization = require("./organization.model.js")(mongoose);
db.events = require("./events.model.js")(mongoose);
db.nftminted = require("./nftminted.model.js")(mongoose);


module.exports = db;
