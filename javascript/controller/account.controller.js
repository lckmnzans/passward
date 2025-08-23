const { parseCredential } = require('../service/auth.service');
const userStore = require('../dummy/user.store');

async function login(req,res) {
    const username = req.body?.username;
    const password = req.body?.password;
    
    if (username && password) {
        const data = userStore.getUser(username);
        let token = '';
        if (data[0]) {
            token = parseCredential(data[0].username, data[0].username);
        }
        res.json({
            success: true,
            msg: "Data user diterima",
            data: {
                username: username,
                accessToken: token
            }
        })
    } else {
        res.status(400).json({
            success: false,
            msg: "Data user kosong atau belum sesuai"
        })
    }
}

async function register(req,res) {
    const username = req.body?.username;
    const email = req.body?.email;
    const password = req.body?.password;

    if (username && email && password) {
        userStore.addUser(username, email, password);
        res.json({
            success: true,
            msg: "User berhasil register",
            data: {
                username: username,
                email: email
            }
        })
    } else {
        res.status(400).json({
            success: false,
            msg: "Data user kosong atau belum sesuai"
        })
    }
}

module.exports = {
    login,
    register
}