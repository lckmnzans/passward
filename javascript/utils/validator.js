const STRONG_EMAIL =
/^(?=.{1,254}$)(?=.{1,64}@)(?:[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

function isExist(...args) {
    let i = 0
    while (i < args.length) {
        if (args[i] == null) return false;
        if (args[i] == undefined) return false;
        if (args[i] == '') return false;
        i++;
    }
    return true
}

function isEmailValid(emailString) {
    return STRONG_EMAIL.test(emailString.trim());
}

module.exports = { isExist, isEmailValid };