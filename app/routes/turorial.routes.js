module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const volunteers = require("../controllers/volunteers.controller.js");
  

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);
  

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);




  //create a new Volunteer
  router.post("/creatvolunteer", volunteers.create);
  

  
  app.use("/api/tutorials", router);
  app.use("/api/volunteers", router);
  
};
