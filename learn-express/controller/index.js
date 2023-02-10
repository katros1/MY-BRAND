import express, { json } from "express";
import mongoose from "mongoose";
import {findBlogs ,createBlog, findBlog, updateBlog, deleteBlog, sendQuery, readQuery, deleteQuery, loginMssg, signUpMssg, commentDisplay, findComments} from "routes.js";
import blogValid from "./middleware/checkBlogValid.js";
import qryvalid from "./middleware/checkQueryValid.js";
import loginValid from "./middleware/checkLoginValid.js";
import Uservalid from "./middleware/checkSignUpValid.js";
import cmmtvalid from "./middleware/checkCommentvalid.js";
import passport from "passport";
import connectEnsureLogin from "connect-ensure-login";


mongoose.connect("mongodb+srv://Katros:babu02@cluster0.z4lsky9.mongodb.net/test")
.then(() => {
    const app = express();
    app.use(json())

app.get("/blogs", findBlogs)
app.post("/blogs", blogValid, createBlog)
app.get("/blogs/:id", findBlog)
app.patch("/blogs/:id", updateBlog)
app.delete("/blogs/:id", deleteBlog)
app.post("/messages",qryvalid, sendQuery)
app.get("/messages", readQuery)
app.delete("/messages/:id", deleteQuery)
app.post("/auth/login",loginValid, loginMssg)
app.post("/auth/signUp",Uservalid, signUpMssg)
app.post("/blogs/:id/comments", cmmtvalid ,commentDisplay)
app.get("/blogs/:id/comments", findComments)
app.listen(8000, () => {
    console.log("Server has started!");
});

})
 

