const jwt = require('jwt-simple');
const KEY = 'kunci rahasya';

function encode(payload) {
    return jwt.encode(payload, KEY);
}

function decode(token) {
    return jwt.decode(token, KEY);
}

module.exports = { encode, decode };