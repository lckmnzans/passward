/**
 * This is just a in-memory store
 * Cleared if changes happen
 */
const credentials = [];
const credential = (sitename, password) => { return { sitename, password } };

module.exports = {
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