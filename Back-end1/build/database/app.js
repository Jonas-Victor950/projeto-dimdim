"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conection_1 = __importDefault(require("./Conection"));
const mongoose_1 = __importDefault(require("mongoose"));
const default_1 = __importDefault(require("./default"));
mongoose_1.default.connect(`mongodb+srv://${default_1.default.user}:${default_1.default.pass}@cluster0.mbitszy.mongodb.net/?retryWrites=true&w=majority`);
const mongoDB = new Conection_1.default(`mongodb+srv://${default_1.default.user}:${default_1.default.pass}@cluster0.mbitszy.mongodb.net/?retryWrites=true&w=majority`);
exports.default = mongoDB;
