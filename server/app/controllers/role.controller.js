var _ = require("lodash");
const Role = require('../models/role.model');

exports.index = function (req, res) {
    Role.find(function (err, roles) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(roles);
    });
};

exports.show = function (req, res) {
    Role.findById(req.params.id, function (err, role) {
        if (err) {
            return handleError(res, err);
        }
        if (!role) {
            return res.sendStatus(404);
        }
        return res.status(200).json(role);
    });
};

// Creates a new thing in the DB.
exports.create = function (req, res) {
    Role.create(req.body, function (err, role) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(role);
    });
};

// Updates an existing thing in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Role.findById(req.params.id, function (err, role) {
        if (err) {
            return handleError(res, err);
        }
        if (!role) {
            return res.sendStatus(404);
        }
        var updated = _.merge(role, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(role);
        });
    });
};

// Deletes a thing from the DB.
exports.destroy = function (req, res) {
    Role.findById(req.params.id, function (err, role) {
        if (err) {
            return handleError(res, err);
        }
        if (!role) {
            return res.sendStatus(404);
        }
        role.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.sendStatus(204);
        });
    });
};


function handleError(res, err) {
    return res.sendStatus(500, err);
}