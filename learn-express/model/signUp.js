import mongoose from "mongoose";
const schema = mongoose.Schema({
    name: String,
	UserName: String,
	Password: String,
    confirmPassword: String  
},

);



const UserInfo = mongoose.model("UserInfo", schema);
export default UserInfo;