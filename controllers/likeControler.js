

const Post = require("../models/postModel");
const Like =require("../models/likeModel");

// like a post



exports.likePost =async (req,res) =>{
    try{
        const {post,user} =req.body
        const like =new Like({
            post,user,
        });
        const savedLike = await like.save();

        // update post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{Likes: savedLike._id}},{new :true}).populate("Likes").exec();
        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error:"error while hit like",
            });
    }
}         

// unlike post
exports.unlikePost =async (req,res) =>{
    try{
        const {post,like} =req.body
        // find and delete like collection
        // post:post mean post ke under post ka data hoga
        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});

        // update post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{Likes: deleteLike._id}},{new :true}).populate("Likes").exec();
        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error:"error while hit unlike",
            });
    }
}         