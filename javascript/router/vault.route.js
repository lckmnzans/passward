const router = require('express').Router();
const controller = require('../controller/vault.controller');
const { getCredential } = require('../middleware/auth.middleware');

router.post('/', getCredential, controller.setPassword);
router.get('/', getCredential, controller.getPassword);

module.exports = router;