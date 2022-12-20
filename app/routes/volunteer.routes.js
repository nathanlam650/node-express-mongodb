module.exports = app => {
  const volunteers = require("../controllers/volunteers.controller.js");
  
  var router = require("express").Router();
  
  // Create a new Volunteers
  router.post("/", volunteers.create);

  // Retrieve all Volunteers
  router.get("/", volunteers.findAll);

  // Retrieve all published Volunteers
  //router.get("/published", volunteers.findAllPublished);

  // Retrieve a single Volunteers with id
  router.get("/:id", volunteers.findOne);

  // Update a Volunteers with id
  router.put("/:id", volunteers.update);

  // Delete a Volunteers with id
  router.delete("/:id", volunteers.delete);

  // Create a new Volunteers
  router.delete("/", volunteers.deleteAll);
   
  app.use("/api/volunteers", router);
  
};
