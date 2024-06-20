// import mongoose
const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
// kis post pe comment kiya
    post:{
        // kisi model ko kisi dusre model me refer is tarha karte h
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",

    },
    // kisne comment kiya
    user:{
        type:String,
        required:true
    },
    // kya comment kiya
    body:{
        type:String,
        required:true
    }
})

// export
module.exports = mongoose.model("Comment",commentSchema);