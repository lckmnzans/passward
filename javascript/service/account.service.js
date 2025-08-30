const strategy = require('../security/strategy');
const tokenizer = require('../security/tokenizer');
const store = require('../dummy/user.store');

function parseCredential(id, uname) {
    const payload = tokenizer.builder(id, uname);
    return strategy.encoding(payload);
}

function checkAndValidate(username, password) {
    const data = store.getUser(username);
    if (data[0]) {
        if (data[0].password == password) {
            return {
                msg: "Success login",
                data: {
                    accessToken: parseCredential(data[0].username, data[0].username)
                }
            };
        } else {
            return {
                msg: "Password incorrect",
                data: null
            };
        }
    } else {
        return {
            msg: "User does not exist",
            data: null
        };
    }
}

function checkAndCreate(username, email, password) {
    const data = store.getUser(username);
    if (data[0]) {
        return {
            msg: "Username already exists",
            data: null
        };
    } else {
        const id = store.addUser(username, email, password);
        return {
            msg: "User created",
            data: {
                id,
                username,
                email
            }
        }
    }
}

module.exports = { checkAndValidate, checkAndCreate };