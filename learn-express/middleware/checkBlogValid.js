import blogValidator from "../validation/blogValidation.js";
const blogValid  = (req, res, next) =>{
    const {error} = blogValidator(req.body)
    if(error){
        return res.send({err: error.details[0].message})
    }

    try{
           next();
    } 
    catch(error){
        console.log("invalid input");

    }

}
export default blogValid;