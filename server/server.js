require('./../config/config');

const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

const TodoRoutes = require('./routes/todo');
const UserRoutes = require('./routes/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', TodoRoutes.routes);
app.use('/', UserRoutes.routes);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };