const Router = require('express');

var { Todo } = require('./../models/todo');

const routes = Router();

routes.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then((doc) => {
            res.send(doc);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

routes.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }).catch((e) => {
        res.status(400).send(e);
    });
});

module.exports = { routes };