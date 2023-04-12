const db = require("../models");
const OrganizationModel = db.organization;
//check capital or small letter

// Create and Save a new dbthings
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    //console.log(req.body)
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a things
  const organization = new OrganizationModel({
    username: req.body.username,
    description: req.body.description,
    password: req.body.password,
    published: req.body.published ? req.body.published : false
  });

  // Save things in the database
  organization
    .save(organization)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Organization."
      });
    });
};

// Retrieve all things from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};

  OrganizationModel.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Organization."
      });
    });
};

// Find a single Organization with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  OrganizationModel.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Organization with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Organization with id=" + id });
    });
};

// Update a Organization by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  OrganizationModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Organization with id=${id}. Maybe Organization was not found!`
        });
      } else res.send({ message: "Organization was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Organization with id=" + id
      });
    });
};

// Delete a Organization with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  OrganizationModel.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Organization with id=${id}. Maybe Organization was not found!`
        });
      } else {
        res.send({
          message: "Organization was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Organization with id=" + id
      });
    });
};

// Delete all Organization from the database.
exports.deleteAll = (req, res) => {
  OrganizationModel.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Organization were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Organization."
      });
    });
};

// Find all published Organization
exports.findAllPublished = (req, res) => {
  OrganizationModel.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Organization."
      });
    });
};
