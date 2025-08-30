const strategy = require('../security/strategy');
const tokenizer = require('../security/tokenizer');

function auth(req,res,next) {
    const headers = req.headers;
    if (headers?.authorization) {
        const texts = headers.authorization.split(" ");
        if (texts[0] == 'Bearer') {
            const payload = strategy.decoding(texts[1]);
            const validation = payload ? tokenizer.validate(payload) : false;
            if (validation.isNotExpired) {
                req.user = payload;
                next();
            } else {
                return res.status(401).json({
                    success: false,
                    msg: 'Token expired'
                });
            };
        } else { 
            return res.status(401).json({
                success: false,
                msg: 'Authorization header invalid'
            });
        };
    } else {
        return res.status(401).json({
            success: false,
            msg: 'No authorization header'
        });
    }
}

module.exports = { auth }