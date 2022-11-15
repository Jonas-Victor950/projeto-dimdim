"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = void 0;
const Router_1 = require("./helpers/Router");
const CadastradoController_1 = __importDefault(require("./controllers/CadastradoController"));
function setupRoutes(app) {
    const router = new Router_1.Router(app);
    router.get("/", () => {
        return "Buenos, quer ver os cadastrados?";
    });
    router.group("/cadastrados", (router) => {
        router.get("/", CadastradoController_1.default.allCadastrados);
        router.post("/", CadastradoController_1.default.create);
        router.get("/:id", CadastradoController_1.default.getOne);
        router.delete("/:id", CadastradoController_1.default.delete);
        router.put("/:id", CadastradoController_1.default.update);
    });
}
exports.setupRoutes = setupRoutes;
