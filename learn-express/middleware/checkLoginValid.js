import loginValidator from "../validation/loginValidation.js";
const lgnvalid =(req, res, next) =>{
    const {error} = loginValidator(req.body)
    if(error){
        return res.send(error.details[0].message)
    }

    try{
           next();
    } 
    catch(error){
        console.log("invalid input");

    }

}
export default lgnvalid;