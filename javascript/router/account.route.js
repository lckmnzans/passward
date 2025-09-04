const { Router } = require('express');

const routerv1 = Router();
const controllerv1 = require('../controller/account.controller');

routerv1.post('/register', controllerv1.register);
routerv1.post('/login', controllerv1.login);

const routerv2 = Router();
const controllerv2 = require('../controller/account2.controller');

routerv2.post('/register', controllerv2.register);
routerv2.post('/login', controllerv2.login);

module.exports = { routerv1, routerv2 };