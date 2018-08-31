require('./../config/config');
// require('./db/mongoose');

const express = require('express');
const bodyParser = require('body-parser');

// const TodoRoutes = require('./routes/todo');
// const UserRoutes = require('./routes/user');
// const ClassifierRoutes = require('./routes/classifier');
// const HoundifyRoutes = require('./routes/houndify.router');
const fsHook = require('./routes/fshook');

var app = express();
const port = process.env.PORT || 3000;

//console.log(process.env.NODE_ENV);
// app.use(express.static(__dirname + (process.env.NODE_ENV ? '/public' : '/public/dist/voice-command')));

app.use(bodyParser.json());
// app.use('/', TodoRoutes.routes);
// app.use('/', UserRoutes.routes);
// app.use('/', ClassifierRoutes.routes);
// app.use('/', HoundifyRoutes.routes);
app.use('/', fsHook.routes);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };