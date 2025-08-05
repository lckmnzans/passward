const router = require('express').Router();

const accRoute = require('./account.route');
router.use('/api/v1/account', accRoute);

module.exports = router;