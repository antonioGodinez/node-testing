require('dotenv').config();
const Router = require('express');
const houndifyExpress = require('houndify').HoundifyExpress;

const routes = Router();
const clientId = process.env.HOUNDIFY_ID;
const clientKey = process.env.HOUNDIFY_KEY;

routes.get('/houndifyAuth', houndifyExpress.createAuthenticationHandler({
    clientId, clientKey
}));

module.exports = { routes };
