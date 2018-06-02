const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

const TodoRoutes = require('./routes/todo');

var app = express();

app.use(bodyParser.json());
app.use('/', TodoRoutes.routes);

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };