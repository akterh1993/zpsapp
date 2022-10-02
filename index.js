const app = require('./app');
const config = require('./config/config');

const PORT = config.app.port;

app.listen(PORT, ()=> {
    console.log(`App is Running on port http://localhost:${PORT}`)
});