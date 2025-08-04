const router = require('express').Router();
const controller = require('../controller/account.controller');
const { getCredential } = require('../service/auth.service');

router.post('/register', controller.register);
router.post('/login', getCredential, controller.login);

module.exports = router;