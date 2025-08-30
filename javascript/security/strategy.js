const jwt = require('jwt-simple');
const KEY = 'kunci rahasya';

module.exports = {
    encoding: (payload) => {
        return jwt.encode(payload, KEY)
    },
    decoding: (token) => {
        let payload = null;
        try {
            payload = jwt.decode(token, KEY);
        } catch (e) {
            console.error(e);
        }
        return payload;
    }
}