import { CadastradoInterface } from "./../interfaces/CadastradoInterface";
import { Cadastrado } from "../models";

class CadastradoRepository {
  getCadastrados(): Promise<Array<any>> {
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

  getOneCadastrado(cadastradoId: number): Promise<any | null> {
    return Cadastrado.findOne({
      where: {
        _id: cadastradoId,
      },
    });
  }

  deleteCadastrado(cadastradoId: number): Promise<any> {
    return Cadastrado.deleteOne({
      where: {
        _id: cadastradoId,
      },
    });
  }

  updateCadastrado(
    cadastradoId: number,
    dados: CadastradoInterface
  ): Promise<Array<any>> {
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
