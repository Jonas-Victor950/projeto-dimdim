"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('dindin', 'root', 'lindo2849', {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: console.log
});
