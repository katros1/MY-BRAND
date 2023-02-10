import mongoose from "mongoose";
const schema = mongoose.Schema(
    {
        name: String,
        email: String,
        comment: String,
        date:{type: Date,
            default: Date.now
        },
         blogId:{type:mongoose.Schema.Types.ObjectId, ref:"Blog"},
         UserId:{type:mongoose.Schema.Types.ObjectId, ref:"UserInfo"}
    }
);
const comment = mongoose.model("comments" , schema);
export default comment; 