import mongoose from "mongoose";
const schema = mongoose.Schema({
	title: String,
	content: String,
	Image: String,
	blogLikes:[{type: mongoose.Schema.Types.ObjectId, ref:"blogLikes"}],
	blogComments:[{type: mongoose.Schema.Types.ObjectId, ref:"comments"}]
},
{
	timestamps:true,
}

);
const Blog = mongoose.model("Blog", schema);

export default Blog;