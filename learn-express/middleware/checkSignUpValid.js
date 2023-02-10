import userValidation from "../validation/signUpValidation.js";
const Uservalid =(req, res, next) => {
    const {error} = userValidation(req.body)
    if(error){
        return res.send({err:error.details[0].message})
    }

    try{
           next();
    } 
    catch(error){
        console.log("invalid input");

    }

}
export default Uservalid;