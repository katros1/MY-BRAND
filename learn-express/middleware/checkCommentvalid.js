import commentValidator from "../validation/commentValidation.js";
const cmmtvalid =(req, res, next) =>{
    const {error} = commentValidator(req.body)
    if(error){
        return res.status(400).send({err:error.details[0].message})
    }

    try{
           next();
    } 
    catch(error){
        console.log("invalid input");

    }

}
export default cmmtvalid;