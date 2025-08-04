const tokenize = require('../utils/tokenize');

function getCredential(req,res,next) {
    const headers = req.headers;
    if (headers?.authorization) {
        const texts = headers.authorization.split(" ");
        if (texts[0] == 'Bearer') next();
        else return res.status(401).json({
            success: false,
            msg: 'Authorization header invalid'
        });
    } else {
        return res.status(401).json({
            success: false,
            msg: 'No authorization header'
        });
    }
}

module.exports = { 
    getCredential
}