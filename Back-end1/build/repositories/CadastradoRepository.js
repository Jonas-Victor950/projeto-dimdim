"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cadastrado_1 = __importDefault(require("../models/Cadastrado"));
class CadastradoRepository {
    getCadastrados() {
        return Cadastrado_1.default.findAll();
    }
    createCadastrado(dados) {
        return Cadastrado_1.default.create({
            name: dados.name,
            email: dados.email,
            message: dados.message
        });
    }
    getOneCadastrado(cadastradoId) {
        return Cadastrado_1.default.findOne({
            where: {
                id: cadastradoId
            }
        });
    }
    deleteCadastrado(cadastradoId) {
        return Cadastrado_1.default.destroy({
            where: {
                id: cadastradoId
            }
        });
    }
    updateCadastrado(cadastradoId, dados) {
        return Cadastrado_1.default.update({
            name: dados.name,
            email: dados.email,
            message: dados.message
        }, {
            where: {
                id: cadastradoId
            }
        });
    }
}
;
exports.default = new CadastradoRepository();
