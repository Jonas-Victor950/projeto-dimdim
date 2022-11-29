"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class CadastradoRepository {
    getCadastrados() {
        const findAll = models_1.Cadastrado.find();
        return findAll;
    }
    createCadastrado(dados) {
        return models_1.Cadastrado.create({
            name: dados.name,
            email: dados.email,
            message: dados.message,
        });
    }
    getOneCadastrado(cadastradoId) {
        return models_1.Cadastrado.findOne({
            where: {
                _id: cadastradoId,
            },
        });
    }
    deleteCadastrado(cadastradoId) {
        return models_1.Cadastrado.deleteOne({
            where: {
                _id: cadastradoId,
            },
        });
    }
    updateCadastrado(cadastradoId, dados) {
        return models_1.Cadastrado.updateOne({
            where: {
                _id: cadastradoId,
            },
        }, {
            name: dados.name,
            email: dados.email,
            message: dados.message,
        });
    }
}
exports.default = new CadastradoRepository();
