require('dotenv').config({ path: ['.env','../.env']});
module.exports = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 8000,
    hostname: process.env.HOST || 'localhost'
}