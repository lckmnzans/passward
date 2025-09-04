const bcrypt = require('bcrypt');
const strategy = require('../security/strategy');
const tokenizer = require('../security/tokenizer');
const store = require('../dummy/user.store');

async function hashing(plaintext) {
    if (plaintext) {
        const hashed = await bcrypt.hash(plaintext, 10);
        return hashed;
    } else {
        throw new Error("NullException", { cause: "Empty value cannot be hashed"});
    }
}

function parseCredential(id, uname) {
    const payload = tokenizer.builder(id, uname);
    return strategy.encoding(payload);
}

function checkAndValidate(username, password, encrypted=false) {
    const data = store.getUser(username);
    const user = data[0];
    if (!user) {
        return {
            msg: "User does not exist",
            data: null
        };
    } else {
        const isMatch = encrypted ?
            bcrypt.compareSync(password, user.password) : user.password == password
        ;

        if (!isMatch) {
            return {
                msg: "Password incorrect",
                data: null
            }
        } else {
            return {
                msg: "Success login",
                data: {
                    accessToken: parseCredential(user.username, user.username)
                }
            }
        }
    }
}

function checkAndCreate(username, email, password) {
    const data = store.getUser(username);
    const user = data[0];
    if (user) {
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

module.exports = { hashing, checkAndValidate, checkAndCreate };