const token = require('../utils/token');

function parseCredential(id, uname) {
    const date = new Date();
    const payload = {
        sub: id,
        name: uname,
        iat: date.getTime(),
        exp: date.setHours(12).valueOf()
    }
    return token.encode(payload);
}

module.exports = { parseCredential };