const mongoose = require('mongoose');
const config = require("./config");

// database connected
const dbURL = config.db.url;

mongoose.connect(dbURL)
.then(()=>{
    console.log("Mongodb is connected")
}).catch((error)=>{
    console.log(error);
    process.exit(1);
});



// exports.connect = () => {
//     // Connecting to the database
//     mongoose
//       .connect(dbURL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//       })
//       .then(() => {
//         console.log("Successfully connected to database");
//       })
//       .catch((error) => {
//         console.log("database connection failed. exiting now...");
//         console.error(error);
//         process.exit(1);
//       });
//   };
