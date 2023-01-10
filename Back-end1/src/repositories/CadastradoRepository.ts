import { CadastradoInterface } from "./../interfaces/CadastradoInterface";
import { Cadastrado } from "../models";

class CadastradoRepository {
  getCadastrados(){
    const findAll = Cadastrado.find();
    return findAll;
  }

  createCadastrado(dados: CadastradoInterface): Promise<any> {
    return Cadastrado.create({
      name: dados.name,
      email: dados.email,
      message: dados.message,
    });
  }

  getOneCadastrado(cadastradoId: number){
    return Cadastrado.findOne({
      where: {
        _id: cadastradoId,
      },
    });
  }

  deleteCadastrado(cadastradoId: number){
    return Cadastrado.deleteOne({
      where: {
        _id: cadastradoId,
      },
    });
  }

  updateCadastrado(
    cadastradoId: number,
    dados: CadastradoInterface
  ){
    return Cadastrado.updateOne(
      {
        where: {
          _id: cadastradoId,
        },
      },
      {
        name: dados.name,
        email: dados.email,
        message: dados.message,
      }
    );
  }
}

export default new CadastradoRepository();
