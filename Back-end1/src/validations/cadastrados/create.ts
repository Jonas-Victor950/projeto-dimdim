import { validate, Joi} from 'express-validation';

const validacao = validate({
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        message: Joi.string().required()
    })
})

export default validacao