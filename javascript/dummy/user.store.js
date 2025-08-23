/**
 * This is just a in-memory store
 * Cleared if changes happen
 */
const users = [];
const user = (username, email, password) => { return { username, email, password } };

module.exports = {
    addUser(username, email, password) {
        users.push(user(username, email, password));
    },
    getUser(username) {
        if (username) {
            return users.filter(user => user.username == username);
        } else {
            return users;
        }
    }
}