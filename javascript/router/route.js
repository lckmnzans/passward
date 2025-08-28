const router = require('express').Router();

const accRoute = require('./account.route');
router.use('/api/v1/account', accRoute);

const vauRoute = require('./vault.route');
router.use('/api/v1/vault', vauRoute);

module.exports = router;