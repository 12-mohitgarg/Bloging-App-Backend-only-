// import model

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");



// bussiness model
// abki bar create kerne ke liye create function ki jagja save ka use karange
exports.createComment = async (req,res) => {
    try{
        // 'featch data from req ki body'
        const {post , user , body} =req.body;
        // create a comment object
        const comment = new Comment({
            post,user,body
        });

        // save new comment into the data base
        const savedComment = await comment.save();

        // find the post by id and add new comment in its comment array
// push oprator use for update
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}} ,{new : true})
        // id se jo data aaya h usko use kerna ke liya 
                                .populate("comments")//populate the comments array with comment document
                                .exec();//for exiqute

                                res.json({
                                    post: updatedPost,
                                });


    }
    catch  (error) {
            return res.status(500).json({
            error:"error while creating comment",
            });
    }
}