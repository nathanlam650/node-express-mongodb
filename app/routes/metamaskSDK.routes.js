module.exports = app => {
  const metamaskSDK = require("../controllers/metamaskSDK.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", metamaskSDK.create);

  router.post("/", metamaskSDK.create);

  // Retrieve all Tutorials
  router.get("/", metamaskSDK.findAll);

  router.get("/", metamaskSDK.get);


  
  app.use("/api/metamask", router);
  
};
