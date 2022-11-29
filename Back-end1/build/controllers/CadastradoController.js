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
const CadastradoService_1 = __importDefault(require("../services/CadastradoService"));
const logger_1 = __importDefault(require("../database/logger"));
const messages_1 = __importDefault(require("../constants/messages"));
class CadastradoController {
    static allCadastrados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cadastrados = yield CadastradoService_1.default.getCadastrados();
                if (cadastrados.length <= 0) {
                    logger_1.default.error("⚠️ Nenhum cadastrado até o momento.");
                    return res
                        .status(500)
                        .json({ success: false, msg: "⚠️ Nenhum cadastrado até o momento." });
                }
                else {
                    logger_1.default.info("✔️ Cadastrados encontrados com sucesso!");
                    return res
                        .status(200)
                        .json({
                        success: true,
                        msg: "✔️ Cadastrados encontrados com sucesso!",
                        data: cadastrados,
                    });
                }
            }
            catch (error) {
                logger_1.default.error(`Pane no sistema: ${error.message}`);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            console.log(payload);
            const cadastradoObj = {
                name: payload.name,
                email: payload.email,
                message: payload.message,
            };
            try {
                const cadastrado = yield CadastradoService_1.default.createCadastrado(cadastradoObj);
                logger_1.default.info("✔️ Cadastrado criado com sucesso!");
                return res
                    .status(200)
                    .json({
                    success: true,
                    msg: "✔️ Cadastrado criado com sucesso!",
                    data: cadastrado,
                });
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const cadastradoId = parseInt(req.params.id);
                const cadastrado = yield CadastradoService_1.default.getOneCadastrado(cadastradoId);
                if (!cadastrado) {
                    logger_1.default.error(messages_1.default.ERROR.CADASTRADO_NOT_FOUND);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.CADASTRADO_NOT_FOUND });
                }
                else {
                    logger_1.default.info("Mandando o cadastrado que foi pedido!");
                    return res.json({ success: true, data: cadastrado });
                }
            }
            catch (error) {
                console.log(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            console.log(payload);
            const cadastradoObj = {
                name: payload.name,
                email: payload.email,
                message: payload.message,
            };
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const cadastradoId = parseInt(req.params.id);
                const cadastrado = yield CadastradoService_1.default.getOneCadastrado(cadastradoId);
                if (!cadastrado) {
                    logger_1.default.error(messages_1.default.ERROR.CADASTRADO_NOT_FOUND);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.CADASTRADO_NOT_FOUND });
                }
                else {
                    const updatedCadastrado = yield CadastradoService_1.default.updateCadastrado(cadastradoId, cadastradoObj);
                    logger_1.default.info("✔️ Cadastrado atualizado com sucesso!");
                    return res
                        .status(200)
                        .json({
                        success: true,
                        msg: "✔️ Cadastrado atualizado com sucesso!",
                        data: cadastradoObj,
                    });
                }
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id || isNaN(parseInt(req.params.id))) {
                    logger_1.default.error(messages_1.default.ERROR.NOT_VALID_ID);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.NOT_VALID_ID });
                }
                const cadastradoId = parseInt(req.params.id);
                const cadastrado = yield CadastradoService_1.default.getOneCadastrado(cadastradoId);
                if (!cadastrado) {
                    logger_1.default.error(messages_1.default.ERROR.CADASTRADO_NOT_FOUND);
                    return res
                        .status(500)
                        .json({ success: false, msg: messages_1.default.ERROR.CADASTRADO_NOT_FOUND });
                }
                else {
                    yield CadastradoService_1.default.deleteCadastrado(cadastradoId);
                    logger_1.default.info("✔️ Cadastrado excluído com sucesso!");
                    return res
                        .status(200)
                        .json({ success: true, msg: "✔️ Cadastrado excluído com sucesso!" });
                }
            }
            catch (error) {
                logger_1.default.error(error);
                return res
                    .status(500)
                    .json({ success: false, msg: messages_1.default.ERROR.ERROR_CATCH });
            }
        });
    }
}
exports.default = CadastradoController;
