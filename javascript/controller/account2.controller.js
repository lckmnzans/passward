const accountService = require('../service/account.service');
const validator = require('../utils/validator');

async function login(req,res) {
    const username = req.body?.username;
    const password = req.body?.password;
    
    if (validator.isExists(username) && validator.isExists(password)) {
        const validating = accountService.checkAndValidate(username, password, true);
        if (validating.data) {
            res.json({
                success: true,
                msg: validating.msg,
                data: validating.data
            });
        } else {
            res.status(401).json({
                success: false,
                msg: validating.msg
            })
        }
    } else {
        res.status(400).json({
            success: false,
            msg: "Data user kosong atau belum sesuai"
        });
    }
    return;
}

async function register(req,res) {
    const username = req.body?.username;
    const email = req.body?.email;
    const password = req.body?.password;

    if (username && email && password) {
        const emailValidity = validator.isEmailValid(email);
        const passValidity = validator.isExists(password);

        if (emailValidity && passValidity) {
            const hashed = await accountService.hashing(password);
            const creating = accountService.checkAndCreate(username, email, hashed);
            res.json({
                success: true,
                msg: creating.msg,
                data: creating.data
            });
        } else {
            let msg = '';
            if (!emailValidity && !passValidity) {
                msg = 'Email dan password tidak valid';
            } else if (!emailValidity) {
                msg = 'Email tidak valid';
            } else if (!passValidity) {
                msg = 'Password masih belum sesuai';
            }
            res.json({
                success: false,
                msg: msg
            });
        }
    } else {
        res.status(400).json({
            success: false,
            msg: "Data user kosong atau belum sesuai"
        });
    }
    return;
}


module.exports = { 
    login,
    register
}