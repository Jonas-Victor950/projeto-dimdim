"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const validacao = (0, express_validation_1.validate)({
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().required(),
        email: express_validation_1.Joi.string().email().required(),
        message: express_validation_1.Joi.string().required()
    })
});
exports.default = validacao;
