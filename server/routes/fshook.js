require('dotenv').load();
const Router = require('express');

const routes = Router();

routes.post('/fshook', (req, res) => {
    console.log(`fshook *** ${JSON.stringify(req.body)}`);

    res.send({});
});

module.exports = { routes }