const { parseCredential } = require('../service/auth.service');
const userStore = require('../dummy/user.store');
const { isEmailValid } = require('../utils/isValid');

async function login(req,res) {
    const username = req.body?.username;
    const password = req.body?.password;
    
    if (username && password) {
        const data = userStore.getUser(username);
        let token = null;
        if (data[0]) {
            token = parseCredential(data[0].username, data[0].username);
        } else {
            res.json({
                success: false,
                msg: "User tidak ditemukan"
            });
            return;
        }
        res.json({
            success: true,
            msg: "Data user diterima",
            data: {
                username: username,
                accessToken: token
            }
        });
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
        if (!isEmailValid(email)) {
            res.json({
                success: false,
                msg: "Email tidak valid"
            });
            return;
        }

        userStore.addUser(username, email, password);
        res.json({
            success: true,
            msg: "User berhasil register",
            data: {
                username: username,
                email: email
            }
        });
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