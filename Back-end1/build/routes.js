"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CadastradoController_1 = __importDefault(require("./controllers/CadastradoController"));
const create_1 = __importDefault(require("./validations/cadastrados/create"));
const router = express_1.default.Router();
// Start of Routes
router.get("/cadastrados", CadastradoController_1.default.allCadastrados),
    router.post("/cadastrados", create_1.default, CadastradoController_1.default.create);
router.get("/cadastrados/:id", CadastradoController_1.default.getOne);
router.delete("/cadastrados/:id", CadastradoController_1.default.delete);
router.put("/cadastrados/:id", create_1.default, CadastradoController_1.default.update);
// End of Routes
exports.default = router;
