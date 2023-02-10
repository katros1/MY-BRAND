import mongoose from "mongoose";
const schema = mongoose.Schema(
    {
        name: String,
        email: String,
        message: String,
        date:{type: Date,
            default: Date.now
        }} 
);
const contactQuery = mongoose.model("contactQuery" , schema);
export default contactQuery; 