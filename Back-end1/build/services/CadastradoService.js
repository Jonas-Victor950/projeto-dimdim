"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CadastradoRepository_1 = __importDefault(require("../repositories/CadastradoRepository"));
class CadastradoService {
    getCadastrados() {
        return CadastradoRepository_1.default.getCadastrados();
    }
    createCadastrado(dados) {
        if (!dados.name || !dados.email || !dados.message)
            throw new Error("Todos os campos são obrigatórios!");
        return CadastradoRepository_1.default.createCadastrado(dados);
    }
    getOneCadastrado(cadastradoId) {
        return CadastradoRepository_1.default.getOneCadastrado(cadastradoId);
    }
    updateCadastrado(cadastradoId, dados) {
        if (!dados.name || !dados.email || !dados.message)
            throw new Error("Todos os campos são obrigatórios!");
        return CadastradoRepository_1.default.updateCadastrado(cadastradoId, dados);
    }
    deleteCadastrado(cadastradoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cadastrado = yield CadastradoRepository_1.default.getOneCadastrado(cadastradoId);
            if (!cadastrado)
                throw new Error("Cadastrado não encontrado!");
            return CadastradoRepository_1.default.deleteCadastrado(cadastradoId);
        });
    }
}
exports.default = new CadastradoService();
