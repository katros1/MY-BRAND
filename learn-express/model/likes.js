import mongoose from "mongoose";
const schema = mongoose.Schema(
    {
        blogId:{type: mongoose.Schema.Types.ObjectId, ref:"Blog"},
        UserId:{type: mongoose.Schema.Types.ObjectId, ref:"UserInfo"},
        date:{type: Date,
            default: Date.now
        }
        } 
);
const blogLikes = mongoose.model("blogLikes" , schema);
export default blogLikes; 