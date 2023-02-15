import express, { Router } from "express"
const router = Router()
import Blog from "../model/Blog.js"
import contactQuery from "../model/contactQuery.js"
import authInfo from "../model/login.js"
import signUpInfo from "../model/signUp.js"
import bcrypt from "bcryptjs"
import pkg from "jsonwebtoken"
const { sign } = pkg;
import comment from "../model/comment.js"
import mongoose from "mongoose"
import blogLikes from "../model/likes.js";
import {v2 as cloudinary} from "cloudinary";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import multer from "multer";
import path from 'path'

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


export async function findBlogs(req , res) {
    const blogs = await Blog.find();
    res.send({Blogs: blogs});
 }



 export async function  createBlog(req, res) {
    const blog = new Blog({
		title:req.body.title,
		content:req.body.content,
		Image:req.file.path
	}); 
   
    await blog.save();
    res.send({Blogs: blog});
 }

/*const createBlogs = async (req, res) =>{
    const blog = new Blog(req.body); 
    await blog.save();
    res.send(blog);
}*/

 export async function  findBlog(req , res) {

    try {
        const blog =await Blog.findById(req.params.id);
        

		if(blog == null){
			res.status(404).send({error:"Blog not found!!"})
		}else{
			res.send({Blogs: blog})
		}
    }catch{
        res.status(404).send({error:"error happened"})
    }

   
 }
export async function updateBlog(req , res) {
    try {
        const blog =await Blog.findById(req.params.id);
        Object.assign(blog,req.body);
        blog.save();
        res.status(201).json({message:`${blog.id} updated successfully`})  
        
    }catch{
        res.status(404).send({error:"Blog not found!!"})
    }
}
export async function deleteBlog(req , res) {
    try {
        const blog =await Blog.findById(req.params.id);
        await blog.remove()
        res.status(200).send({message:"deleted succefully"})  
        
    }catch{
        res.status(404).send({error:"Blog not found!!"})
    }


}
export async function sendQuery(req , res) {

    const query = new contactQuery(req.body)
    await query.save();
    res.send({Queries:query});
}
export async function readQuery(req ,res) {
       const query = await contactQuery.find();
       res.send({Queries:query});

}
export async function deleteQuery(req , res) {
    try {
        const query =await contactQuery.findById(req.params.id);
        await query.remove()
        res.send({message:"deleted succefully"})  
        
    }catch{
        res.status(404).send({error:"Blog not found!!"})
    }
}

export async function loginMssg(req,res) {

        const userName = await signUpInfo.findOne({UserName: req.body.UserName})
    
    if (!userName) {return res.status(400).send({erro:'Authentication error !!'})}

    const password = await bcrypt.compare(req.body.Password, userName.Password) 
    if (!password) return res.status(400).send({erro:'Authentication error !!'})
    const payload = {
        name: userName.name,
        UserName: userName.UserName,
        userId: userName._id,
      }
   
    const token = pkg.sign(payload, "weyuiwiwdhwiuwduwuwuhfw")
    res.header("userToken", token)
    const auth = new authInfo(req.body)
    try{
     await res.send({message:"login successfully", token:token})
    }
    catch{
        res.status(400).send({error:"Authentication !"})
    }

}

export async function signUpMssg(req,res) {
    const userNameExist = await signUpInfo.findOne({UserName: req.body.UserName}) 
    if (userNameExist)return res.status(400).send({message:'UserName Exist!! Choose another'})
    const mixCode = await bcrypt.genSalt(10);
    const mixPassword = await bcrypt.hash(req.body.Password, mixCode)
    

    const auth = new signUpInfo({
        name: req.body.name,
        UserName: req.body.UserName,
        Password: mixPassword
    })
    await auth.save();
    try{
      res.status(201).send({message:"Account created successfully"})
    }
    catch{
        res.status(400).send({error:"Authentication error!!"})
    }

}

export async function commentDisplay(req, res){
    const blog_id=req.params.id;
	if(!mongoose.Types.ObjectId.isValid(blog_id)){
		return res.status(400).send({
	  		message:'Invalid blog id',
	  		
	  	});
	}
	Blog.findOne({_id:blog_id}).then(async (blog)=>{
		if(!blog){
			return res.status(400).send({
				message:'No blog found',
				
			});	
		}else{

			try{
				/*const cmmt = new Validator(req.body, {
                    name: 'required',
                    email: 'required',
					comment:'required',
				});
				const matched = await cmmt.check();
				if (!matched) {
					return res.status(422).send(cmmt.errors);
				}*/
               
				const newCommentDocument= new comment({
                    name: req.body.name,
                    email:req.body.email,
					comment:req.body.comment,
					blogId:blog_id,
					UserId:req.userId
				});
                
				const commentData=await newCommentDocument.save();

				await Blog.updateOne(
					{_id:blog_id},
					{
						$push: { blogComments :commentData.comment } 
					}
				)
    
            return res.status(200).send({
                message:'comment sent successfully',
                data:commentData
            });

			}catch(err){
				return res.status(400).send({
			  		message:err.message,
			  		data:err
			  	});
			}

		
		}
	}).catch((err)=>{
		return res.status(400).send({
	  		message:err.message,
	  		data:err
	  	});
	})


   /* const cmmt = new comment(req.body); 
    await cmmt.save();
    res.send({Comment:cmmt});*/
}
export async function findComments(req , res) {
    const cmmt = await comment.find();
    res.send({Comment: cmmt});
 }

 export async function likesDisplay(req , res) {
    let blog_id=req.params.id;
	if(!mongoose.Types.ObjectId.isValid(blog_id)){
		return res.status(400).send({
	  		message:'Invalid blog id',
	  		
	  	});
	}

	Blog.findOne({_id:blog_id}).then(async(blog)=>{
		if(!blog){
			return res.status(400).send({
		  		message:'No blog found',
		  		
		  	});
		}else{
			let current_user=req.userId;

            blogLikes.findOne({
				blogId:blog_id,
				UserId:current_user
			}).then(async (blog_like)=>{
				try{
					if(!blog_like){
						let blogLikeDoc=new blogLikes({
							blogId:blog_id,
							UserId:current_user
						});
						let likeData=await blogLikeDoc.save();
						await Blog.updateOne({
							_id:blog_id
						},{
							$push:{blogLikes:likeData._id}
						})
						return res.status(200).send({
					  		message:'Liked',
					  		
					  	});

					}else{

						await  blogLikes.deleteOne({
							_id:blog_like._id
						});

						await Blog.updateOne({
							_id:blog_like.blog_id
						},{
							$pull:{blogLikes:blog_like._id}
						})

						return res.status(200).send({
					  		message:'UnLiked',
					  		
					  	});


					}
				}catch(err){
					return res.status(400).send({
				  		message:err.message,
				  		data:err
				  	});
				}

			}).catch((err)=>{
				return res.status(400).send({
			  		message:err.message,
			  		data:err
			  	});
			})

		}
	}).catch((err)=>{
		return res.status(400).send({
	  		message:err.message,
	  		data:err
	  	});
	})
 }