const app = require('./app');

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log(`App is Running on port http://localhost:${PORT}`)
});