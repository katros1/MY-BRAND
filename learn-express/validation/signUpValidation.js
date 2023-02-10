import Joi from "joi";



const signUpSchema = Joi.object({
    name: Joi.string().min(5).max(60).required(),
    UserName: Joi.string().min(5).max(60).required(),
	Password: Joi.string().min(5).max(100).required(),
    ConfirmPassword: Joi.ref('Password')
})

const userValidator = (blgSchema) => signUpSchema.validate(blgSchema, {abortEarly: false});

export default userValidator;

