"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authDB = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    env: "development",
};
exports.default = authDB;
