const _ = require('lodash');
const Router = require('express');
const { ObjectID } = require('mongodb');

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
    console.log('Inside of TODOS');
    Todo.find().then((todos) => {
        console.log(todos);
        res.send({ todos });
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    });
});

routes.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    });
});

routes.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        return res.send({ todo });
    }).catch((e) => {
        return res.status(400).send();
    });
});

routes.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndUpdate(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        todo.text = body.text;

        if(todo.completed != body.completed) {
            todo.completed = body.completed;

            if(todo.completed) {
                todo.completedAt = new Date().getTime();
            } else {
                todo.completedAt = null;
            }
        }

        return  Todo.findByIdAndUpdate(todo, {$set: todo}, {new : true});
    })
    .then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        return res.send({todo});
    })
    .catch((e) => res.status(404).send());
});

module.exports = { routes };