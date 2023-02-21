import Joi from "joi";



const blogSchema = Joi.object({
    title: Joi.string().min(5).max(60).required(),
	content: Joi.string().min(10).max(9000).required(),
	Image: Joi.string()
})

const blogValidator = (blgSchema) => blogSchema.validate(blgSchema, {abortEarly: false});

export default blogValidator;

