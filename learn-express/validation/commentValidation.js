import Joi from "joi";

const commentValidator = (qrySchema) => commentSchema.validate(qrySchema, {abortEarly: false});

const commentSchema = Joi.object({
    name: Joi.string().min(5).required(),
	email: Joi.string().email().required(),
	comment: Joi.string().required().min(5).max(60)
})

export default commentValidator ;

