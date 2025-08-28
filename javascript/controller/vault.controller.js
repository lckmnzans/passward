const vaultService = require('../service/vault.service');

async function setPassword(req,res) {
    const sitename = req.body?.sitename;
    const password = req.body?.password;

    if (sitename && password) {
        const safekeeping = vaultService.savePassword(sitename, password);
        res.json({
            success: true,
            msg: safekeeping.msg,
            data: safekeeping.data
        })
    } else {
        res.status(400).json({
            success: false,
            msg: "Data user kosong atau belum sesuai"
        });
    }
    return;
}

async function getPassword(req,res) {
    const sitename = req.body?.sitename;

    if (sitename) {
        const retrieving = vaultService.retrievePassword(sitename);
        if (retrieving.data) {
            res.json({
                success: true,
                msg: retrieving.msg,
                data: retrieving.data
            });
        } else {
            res.json({
                success: false,
                msg: retrieving.msg
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

module.exports = { 
    setPassword, 
    getPassword
};