const mongoose = require("mongoose");

require("dotenv").config();


const connectWithDb = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("db connected succefully"))
    .catch( (error) =>{
        console.log("db faceing connection issues")
        console.log(error);
        // matlab exit with error
        process.exit(1);
    })

};

module.exports =connectWithDb;