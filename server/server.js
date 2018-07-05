require('./../config/config');

const express = require('express');
const bodyParser = require('body-parser');

const TodoRoutes = require('./routes/todo');
const UserRoutes = require('./routes/user');
const ClassifierRoutes = require('./routes/classifier');

var app = express();
const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);
// app.use(express.static(__dirname + (process.env.NODE_ENV ? '/public' : '/public/dist/voice-command')));

app.use(bodyParser.json());
app.use('/', TodoRoutes.routes);
app.use('/', UserRoutes.routes);
app.use('/', ClassifierRoutes.routes);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
    console.log(`Db ${process.env.MONGODB_URI}`);
});

module.exports = { app };