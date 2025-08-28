const store = require('../dummy/vault.store');

function savePassword(sitename, password) {
    store.save(sitename, password);
    return {
        msg: "Password berhasil disimpan",
        data: null
    };
}

function retrievePassword(sitename) {
    const data = store.retrieve(sitename);
    if (data.length > 0) {
        return {
            msg: "Data berhasil ditemukan",
            data: data
        }
    } else {
        return {
            msg: "Data tidak ditemukan",
            data: null
        }
    }
}

module.exports = { savePassword, retrievePassword };