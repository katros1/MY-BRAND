import express, { json } from "express";
import mongoose from "mongoose";
import {findBlogs ,createBlog, findBlog, updateBlog, deleteBlog, sendQuery, readQuery, deleteQuery, loginMssg, signUpMssg, commentDisplay, findComments, likesDisplay} from "./routes/routes.js";
import blogValid from "./middleware/checkBlogValid.js";
import qryvalid from "./middleware/checkQueryValid.js";
import loginValid from "./middleware/checkLoginValid.js";
import Uservalid from "./middleware/checkSignUpValid.js";
import cmmtvalid from "./middleware/checkCommentvalid.js";
import { isAuth } from "./middleware/ath.js";
import { jwtStrategy } from "./middleware/authorization.js";
import { auth } from "./middleware/auth.js";
//import { authrzt } from "./middleware/authorization.js";
import passport from "passport";
import {v2 as cloudinary} from "cloudinary";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import multer from "multer";
import connectEnsureLogin from "connect-ensure-login";
import UserInfo from "./model/signUp.js";
import localStrategy from "passport-local"
import bodyParser from "body-parser";

const app = express();

mongoose.connect("mongodb+srv://Katros:babu02@cluster0.z4lsky9.mongodb.net/test")
.then(() => {
    
    app.use(json())

    passport.use(jwtStrategy);
    app.use(passport.initialize());


cloudinary.config({
    cloud_name: "dboqnapgi",
    api_key: "852886672871578",
    api_secret: "CmYX-tNp9AfbGl_NSzK38qbhbGU",
  });


const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "DEV",
    },
  });
const upload = multer({ storage });

app.get("/api/v1/blogs", findBlogs)
app.post("/api/v1/blogs", isAuth(passport),upload.single("Image"), blogValid, createBlog)
app.get("/api/v1/blogs/:id", findBlog)
app.patch("/api/v1/blogs/:id",isAuth(passport), updateBlog)
app.delete("/api/v1/blogs/:id",isAuth(passport), deleteBlog)
app.post("/api/v1/messages",qryvalid, sendQuery)
app.get("/api/v1/messages",isAuth(passport), readQuery)
app.delete("/api/v1/messages/:id",isAuth(passport) ,deleteQuery)
app.post("/api/v1/auth/login",loginValid, loginMssg)
app.post("/api/v1/auth/signUp",Uservalid, signUpMssg)
app.post("/api/v1/blogs/:id/comments", cmmtvalid ,commentDisplay)
app.get("/api/v1/blogs/:id/comments", findComments)
app.post("/api/v1/blogs/:id/likes",isAuth(passport), likesDisplay)
app.listen(8000, () => {
    console.log("Server has started!");
});

})

 
export default app
