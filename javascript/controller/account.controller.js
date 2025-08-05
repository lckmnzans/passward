const { parseCredential } = require('../service/auth.service');
const store = require('../dummy/credential.store');
const userStore = require('../dummy/user.store');

async function login(req,res) {
    const username = req.body?.username
    const password = req.body?.password
    
    if (username && password) {
        const user = { username, password }
        // const data = parseCredential(username, username);
        const data = userStore.getUser(username);
        let token = '';
        if (data[0]) {
            token = parseCredential(data[0].username, data[0].username);
        }
        res.json({
            success: true,
            msg: "Data user diterima",
            data: {
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
    const username = req.body?.username
    const password = req.body?.password

    if (username && password) {
        const user = { username, password }
        userStore.addUser(username, password);
        res.json({
            success: true,
            msg: "User berhasil register"
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