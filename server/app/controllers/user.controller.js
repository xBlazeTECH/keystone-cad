const Role = require("../models/role.model");
const User = require("../models/user.model");

exports.roles = (req, res) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    //console.log(user);

    Role.find({ _id: { $in: user.roles }}, (err, roles) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send(roles);
      return;
    })
  })
}

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.getUsers = (req, res) => {
  User.find({}).exec().then((val) => {
    console.log(val);
    res.status(200).send(val);
  })
}
