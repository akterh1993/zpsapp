const http = require('http');
const app = require('./app');
const config = require('./config/config');

// server configur
const HOST = config.app.host;
const PORT = config.app.port;

// const server = http.createServer((req, res) => {
//     console.log("Welcome to the Server")
// });

app.listen(PORT, HOST, ()=> {
    console.log(`App is Running on port http://${HOST}:${PORT}`)
});