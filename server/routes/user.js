const _ = require('lodash');
const Router = require('express');
const { ObjectID } = require('mongodb');

var { User } = require('./../models/user');

const routes = Router();

routes.post('/users', (req, res) => {
    var user = new User( _.pick(req.body, ['email', 'password']));

    user.save().then((doc) => {
        return res.send(doc);
    })
    .catch((e) => res.status(400).send(e));
});

module.exports = { routes };