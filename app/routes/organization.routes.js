module.exports = app => {
  const organizations = require("../controllers/organization.controller");
  
  var router = require("express").Router();
  
  // Create a new things
  router.post("/", organizations.create);

  // Retrieve all things
  router.get("/", organizations.findAll);

  // Retrieve all published things
  router.get("/published", organizations.findAllPublished);

  // Retrieve a single things with id
  router.get("/:id", organizations.findOne);

  // Update a things with id
  router.put("/:id", organizations.update);

  // Delete a things with id
  router.delete("/:id", organizations.delete);

  // Create a new things
  router.delete("/", organizations.deleteAll);
   
  app.use("/api/organization", router);
  
};
