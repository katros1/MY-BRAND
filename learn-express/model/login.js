import mongoose from "mongoose";
const schema = mongoose.Schema({
	UserName: String,
	Password: String,
},

);

const authInfo = mongoose.model("authInfo", schema);
export default authInfo;