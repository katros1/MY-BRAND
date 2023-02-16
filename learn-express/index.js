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
import cors from "cors"
import { auth } from "./middleware/auth.js";
//import { authrzt } from "./middleware/authorization.js";
import passport from "passport";
import {v2 as cloudinary} from "cloudinary";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import multer from "multer";
import swaggerDocs from "./swager.js";
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
    app.use(cors())


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



//---------- Authorization ------------------------------//


/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */






//---------- list of all blogs------------------------------//

/**
 * @openapi
 * '/api/v1/blogs':
 *  get:
 *     tags:
 *     - Blogs
 *     summary: Get all Blogs
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *         400:
 *          description: Bad request
 */

app.get("/api/v1/blogs", findBlogs)






//---------- Create a blog ------------------------------//

/**
 * @openapi
 * '/api/v1/blogs':
 *  post:
 *     tags:
 *     - Create_Blog
 *     summary: Create a blog
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - content
 *              - Image  
 *            properties:
 *              title:
 *                type: string
 *                default: hello
 *              content:
 *                type: string
 *                default: greetings greetings
 *              Image:
 *                type: file 
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */


app.post("/api/v1/blogs", isAuth(passport),upload.single("Image"), blogValid, createBlog)






//---------- Get a single a blog ------------------------------//

/**
 * @openapi
 * '/api/v1/blogs/{id}':
 *  get:
 *     tags:
 *     - Find_Blog
 *     summary: Find blog by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the blog
 *        required: true
 *     responses:
 *      200:
 *        description: Success
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */

app.get("/api/v1/blogs/:id", findBlog)







//---------- Update a blog ------------------------------//

/**
 * @openapi
 * '/api/v1/blogs/{id}':
 *  patch:
 *     tags:
 *     - Update_Blog
 *     summary: Update Blog
  *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the blog
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - title
 *              - content
 *              - Image  
 *            properties:
 *              title:
 *                type: string
 *                default: hello
 *              content:
 *                type: string
 *                default: greetings greetings
 *              Image:
 *                type: file 
 *     responses:
 *      201:
 *        description: Updated
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */

app.patch("/api/v1/blogs/:id",isAuth(passport), updateBlog)






//---------- Delete Blog ------------------------------//


/**
 * @openapi
 * '/api/v1/blogs/{id}':
 *  delete:
 *     tags:
 *     - Delete_Blog
 *     summary: Remove blog by id
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the blog
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */

app.delete("/api/v1/blogs/:id",isAuth(passport), deleteBlog)








//---------- Send a message ------------------------------//

/**
 * @openapi
 * '/api/v1/messages':
 *  post:
 *     tags:
 *     - Send_Message
 *     summary: Type a message
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - message 
 *            properties:
 *              name:
 *                type: string
 *                default: name
 *              email:
 *                type: string
 *                default: valid email
 *              message:
 *                type: string
 *                default: message here 
 *     responses:
 *      200:
 *        description: Success
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad Request
 */

app.post("/api/v1/messages",qryvalid, sendQuery)



//---------- Get messages ------------------------------//



/**
 * @openapi
 * '/api/v1/messages':
 *  get:
 *     tags:
 *     - Messages
 *     summary: Get all messages
 *     security:
 *       - bearerAuth: []  
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *                  email:
 *                    type: string
 *                  message: 
 *                    type:string
 *       400:
 *         description: Bad request
 */

app.get("/api/v1/messages",isAuth(passport), readQuery)



//---------- Delete messages ------------------------------//


/**
 * @openapi
 * '/api/v1/messages/{id}':
 *  delete:
 *     tags:
 *     - Delete Message
 *     summary: Remove message by id
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the message
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */


app.delete("/api/v1/messages/:id",isAuth(passport) ,deleteQuery)


//---------- login ------------------------------//


/**
 * @openapi
 * '/api/v1/auth/login':
 *  post:
 *     tags:
 *     - User Login
 *     summary: login
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - UserName
 *              - Password
 *            properties:
 *              UserName:
 *                type: string
 *                default: username
 *              Password:
 *                type: string
 *                default: password
 *     responses:
 *      200:
 *        description: Success
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

app.post("/api/v1/auth/login",loginValid, loginMssg)




//---------- Create account ------------------------------//


/**
 * @openapi
 * '/api/v1/auth/signUp':
 *  post:
 *     tags:
 *     - SignUp
 *     summary: Create an Account
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - UserName
 *              - Password
 *            properties:
 *              name:
 *                type: string
 *                default: your name
 *              UserName:
 *                type: number
 *                default: choose password
 *              Password:
 *                type: string
 *                default: 123hhhh 
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

app.post("/api/v1/auth/signUp",Uservalid, signUpMssg)



//---------- Comments ------------------------------//



/**
 * @openapi
 * '/api/v1/blogs/{id}/comments':
 *  post:
 *     tags:
 *     - Comment
 *     summary: Leave a comment
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the message
 *        required: true 
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - comment
 *            properties:
 *              name:
 *                type: string
 *                default: your name
 *              email:
 *                type: string
 *                default: your email
 *              comment:
 *                type: string
 *                default: comment here
 *     responses:
 *      201:
 *        description: Send Successfully
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */

app.post("/api/v1/blogs/:id/comments", cmmtvalid ,commentDisplay)



//---------- Comments ------------------------------//


/**
 * @openapi
 * '/api/v1/comments':
 *  get:
 *     tags:
 *     - Comments
 *     summary: Get all comments
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  email:
 *                    type: number
 *                  comment:
 *                    type: string
 *       400:
 *         description: Bad request
 */

app.get("/api/v1/comments", findComments)


//------------- Likes ------------------------------//



/**
 * @openapi
 * '/api/v1/blogs/{id}/likes':
 *  post:
 *     tags:
 *     - Likes
 *     summary: Likes
 *     security:
 *       - bearerAuth: [] 
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the blog
 *        required: true 
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */





app.post("/api/v1/blogs/:id/likes",isAuth(passport), likesDisplay)

app.listen(8000, () => {
    console.log("Server has started!");
    swaggerDocs(app, 8000)
});

})

 
export default app
