"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
const sequelize_1 = require("sequelize");
class Cadastrado extends sequelize_1.Model {
}
exports.default = Cadastrado;
Cadastrado.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    message: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    modelName: 'cadastrados',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    sequelize: database_1.db
});
