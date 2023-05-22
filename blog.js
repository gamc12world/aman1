import mongoose from "mongoose";
const scehema=mongoose.Schema;
const s=scehema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
     subtitle:{
         type:Number,
         required:true
     },image:{
        type:Image,
        required:true
     }
})
const Blog=mongoose.model('Blog',s)

export default Blog;