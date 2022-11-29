import express from "express";
import CadastradoController from "./controllers/CadastradoController";
import validacao from "./validations/cadastrados/create";
const router = express.Router();

// Start of Routes
router.get("/cadastrados", CadastradoController.allCadastrados),
router.post("/cadastrados", validacao, CadastradoController.create);
router.get("/cadastrados/:id", CadastradoController.getOne);
router.delete("/cadastrados/:id", CadastradoController.delete);
router.put("/cadastrados/:id", validacao, CadastradoController.update);
// End of Routes

export default router;
