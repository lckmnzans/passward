const { checkAndValidate, checkAndCreate } = require('../service/auth.service');
const validator = require('../utils/validator');

async function login(req,res) {
    const username = req.body?.username;
    const password = req.body?.password;
    
    if (username && password) {
        const validating = checkAndValidate(username, password);
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
        return;
    } else {
        res.status(400).json({
            success: false,
            msg: "Data user kosong atau belum sesuai"
        });
        return;
    }
}

async function register(req,res) {
    const username = req.body?.username;
    const email = req.body?.email;
    const password = req.body?.password;

    if (username && email && password) {
        if (!validator.isEmailValid(email)) {
            res.json({
                success: false,
                msg: "Email tidak valid"
            });
        } else {
            const creating = checkAndCreate(username, email, password);
            res.json({
                success: true,
                msg: creating.msg,
                data: creating.data
            });
        }
        return;
    } else {
        res.status(400).json({
            success: false,
            msg: "Data user kosong atau belum sesuai"
        });
        return;
    }
}

module.exports = {
    login,
    register
}