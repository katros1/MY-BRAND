import querValidator from "../validation/QueryValidation.js";
const qryvalid =(req, res, next) =>{
    const {error} = querValidator(req.body)
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
export default qryvalid;