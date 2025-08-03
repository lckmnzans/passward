import express, { Express, Request, Response } from "express";
import http from "http";
import router from "./router/router";
const port = 8000;
const hostname = 'localhost';

const app: Express = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');
app.use('/', router);

server.listen(port, hostname, () => {
    console.log(`Server is listening at ${hostname}:${port}`);
})

