module.export = (...args) => {
    let i = 0
    while (i < args.length) {
        if (args[i] == null) return false;
        if (args[i] == undefined) return false;
        if (args[i] == '') return false;
        i++;
    }
    return true
}