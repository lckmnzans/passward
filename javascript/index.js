const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const { port, hostname } = require('./config/server');
const router = require('./route/route');
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(cors());
app.use('/', router);

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`)
})