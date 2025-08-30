const router = require('express').Router();
const controller = require('../controller/vault.controller');
const { auth } = require('../middleware/auth.middleware');

router.post('/', auth, controller.setPassword);
router.get('/', auth, controller.getPassword);

module.exports = router;