require('./../config/config');

const express = require('express');
const bodyParser = require('body-parser');

const TodoRoutes = require('./routes/todo');
const UserRoutes = require('./routes/user');
const ClassifierRoutes = require('./routes/classifier');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public/dist/voice-command'));

app.use(bodyParser.json());
app.use('/', TodoRoutes.routes);
app.use('/', UserRoutes.routes);
app.use('/', ClassifierRoutes.routes);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };