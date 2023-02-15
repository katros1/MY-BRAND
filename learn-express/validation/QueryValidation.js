import Joi from "joi";

const querValidator = (qrySchema) => querySchema.validate(qrySchema, {abortEarly: false});

const querySchema = Joi.object({
    name: Joi.string().min(3).max(60).required(),
	email: Joi.string().email().required(),
	message: Joi.string().required().min(5)
})

export default querValidator ;

