import { CadastradoInterface } from "../interfaces/CadastradoInterface";
import { Request } from "express";
import { Schema, model } from "mongoose";

const cadastradoSchema = new Schema<CadastradoInterface>(
  {
    name: { type: String },
    email: { type: String },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

const Cadastrado = model<CadastradoInterface>("Cadastrado", cadastradoSchema);

export default Cadastrado;

// import { db } from "../database/Conection";
// import { Model, DataTypes, Sequelize} from "sequelize";

// export default class Cadastrado extends Model {}
// Cadastrado.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         name: {
//             type: DataTypes.STRING,
//         },
//         email: {
//             type: DataTypes.STRING,
//         },
//         message: {
//             type: DataTypes.STRING,
//         }
//     },
//     {
//         modelName: 'cadastrados',
//         freezeTableName: true,
//         createdAt: false,
//         updatedAt: false,
//         sequelize: db
//     }
// );
