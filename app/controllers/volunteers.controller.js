const db = require("../models");
const Volunteer = db.volunteers;

// Create and Save a new Volunteer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({ message: "Content can not be empty!, from volunteer.controller.js" });
    return;
  }
    
  // Create a Volunteer
  const volunteer = new Volunteer({
    username: req.body.username,
    password: req.body.password,
    selfIntroduction: req.body.selfIntroduction,
    volunteerTime: 0,
  });

    
  // Save Volunteer in the database
  Volunteer
    .save(volunteer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Volunteer."
      });
    });
};

// Retrieve all Volunteers from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};

  console.log("test1");
  
  Volunteer.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Volunteer."
      });
    });
};

// Find a single Volunteer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Volunteer.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Volunteer with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Volunteer with id=" + id });
    });
};

// Update a Volunteer by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Volunteer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Volunteer with id=${id}. Maybe Volunteer was not found!`
        });
      } else res.send({ message: "Volunteer was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Volunteer with id=" + id
      });
    });
};

// Delete a Volunteer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Volunteer.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Volunteer with id=${id}. Maybe Volunteer was not found!`
        });
      } else {
        res.send({
          message: "Volunteer was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Volunteer with id=" + id
      });
    });
};

// Delete all Volunteers from the database.
exports.deleteAll = (req, res) => {
  Volunteer.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Volunteer were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Volunteer."
      });
    });
};

// Find all published Volunteer
/*exports.findAllPublished = (req, res) => {
  Volunteer.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Volunteer."
      });
    });
};
*/
