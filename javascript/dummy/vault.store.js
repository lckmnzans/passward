/**
 * This is just a in-memory store
 * Cleared if changes happen
 */
const credentials = [];
const credential = (sitename, password) => { return { sitename, password } };

module.exports = {
    save(sitename, password) {
        credentials.push(credential(sitename, password));
    },
    retrieve(sitename) {
        if (sitename) {
            return credentials.filter(credential => credential.sitename == sitename);
        } else {
            return credentials;
        }
    }
}