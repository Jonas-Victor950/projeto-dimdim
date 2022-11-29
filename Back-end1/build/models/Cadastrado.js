"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cadastradoSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String },
    message: { type: String },
}, {
    timestamps: true,
});
const Cadastrado = (0, mongoose_1.model)("Cadastrado", cadastradoSchema);
exports.default = Cadastrado;
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
