const jwt = require('jwt-simple');
const KEY = 'kunci rahasya';

module.exports = {
    encoding: (payload) => { 
        return jwt.encode(payload, KEY)
    },
    decoding: (token) => {
        return jwt.decode(token, KEY)
    }
}