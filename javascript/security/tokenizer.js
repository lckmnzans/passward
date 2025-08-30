/**
 * Payload object
 * @typedef {Object} Payload
 * @property {(number|string)} sub
 * @property {string} name
 * @property {number} iat
 * @property {number} exp
*/

/**
 * @param {(string|number)} id
 * @param {string} username
 * @returns {Payload}
*/
function builder(id, username) {
    const currentTime = Date.now();
    return {
        sub: `${id}`,
        name: `${username}`,
        iat: currentTime,
        exp: currentTime + 12 * 60 * 60
    };
}

/**
 * @param {Payload} payload 
*/
function validate(payload) {
    const {sub,name,iat,exp} = payload;
    return {
        get isNotExpired() {
            return Date.now() <= exp
        }
    };
}

module.exports = { builder, validate };