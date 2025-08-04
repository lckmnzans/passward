const jwt = require('jwt-simple');
const secretKey = 'kunci rahasya';

module.exports = {
    encode: (payload) => {
        return jwt.encode(payload, secretKey);
    },
    decode: (token) => {
        return jwt.decode(token, secretKey);
    }
}