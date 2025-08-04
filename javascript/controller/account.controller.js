async function login(req,res) {
    const username = req.body?.username
    const password = req.body?.password
    
    if (username && password) {
        const user = { username, password }
        console.log("Data user diterima untuk login");
        console.log(user);
        res.json({
            success: true,
            msg: "Data user diterima"
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
        console.log("Data user diterima untuk register");
        console.log(user);
        res.json({
            success: true,
            msg: "Data user diterima"
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