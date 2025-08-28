const token = require('../utils/token');
const userStore = require('../dummy/user.store');

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

function checkAndValidate(username, password) {
    const data = userStore.getUser(username);
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
    const data = userStore.getUser(username);
    if (data[0]) {
        return {
            msg: "Username already exists",
            data: null
        };
    } else {
        const id = userStore.addUser(username, email, password);
        return {
            msg: "User created",
            data: {
                id: id
            }
        }
    }
}

module.exports = { checkAndValidate, checkAndCreate };