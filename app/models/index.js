const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.volunteers = require("./volunteers.model.js")(mongoose);
//db.organizations = require("./organization.model.js")(mongoose);
//db.events = require("./events.model.js")(mongoose);


module.exports = db;
