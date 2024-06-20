// import mongoose
const mongoose = require("mongoose");

// route handler
const likeSchema = new mongoose.Schema({
// kis post pre like kiya
    post:{
        // kisi model ko kisi dusre model me refer is tarha karte h
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",

    },
    // kisne kiya like
    user:{
        type:String,
        required:true,
    }
})

// export
module.exports = mongoose.model("Like",likeSchema);