import Joi from "joi";



const loginSchema = Joi.object({
    UserName: Joi.string().required(),
	Password: Joi.string().required(),
})

const loginValidator = (blgSchema) => loginSchema.validate(blgSchema, {abortEarly: false});

export default loginValidator;

