/**
 * This is just a in-memory store
 * Cleared if changes happen
 */
const users = [];
const user = (username, password) => { return { username, password } };

module.exports = {
    addUser(username, password) {
        users.push(user(username, password));
    },
    getUser(username) {
        if (username) {
            return users.filter(user => user.username == username);
        } else {
            return users;
        }
    }
}