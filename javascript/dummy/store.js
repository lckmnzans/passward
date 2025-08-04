const credentials = [];
const credential = (sitename, password) => { return { sitename, password } };

module.export = {
    addCredential(sitename, password) {
        credentials.push(credential(sitename, password));
    },
    getCredential(sitename) {
        if (sitename) {
            return credentials.filter(credential => credential.sitename == sitename);
        } else {
            return credentials;
        }
    }
}