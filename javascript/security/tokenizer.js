function builder(id, username) {
    const date = new Date();
    return {
        id,
        name: `${username}`,
        iat: date.getTime(),
        exp: date.setHours(12).valueOf()
    }
}

function validate(payload) {
    const credential = payload;
    return {
        get isNotExpired() {
            Date.now() <= payload.exp
        }
    };
}

module.exporst = { builder, validate };