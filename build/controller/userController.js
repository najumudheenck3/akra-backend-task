"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuzzySearch = exports.findOneUser = exports.getAllUsers = void 0;
const error_1 = require("../error");
const User_1 = __importDefault(require("../model/User"));
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pageNumber = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 50;
        const totalCount = yield User_1.default.countDocuments();
        const totalPages = Math.ceil(totalCount / pageSize);
        const offset = (pageNumber - 1) * pageSize;
        const users = yield User_1.default.find().skip(offset).limit(pageSize);
        const hasNextPage = pageNumber < totalPages;
        const hasPreviousPage = pageNumber > 1;
        res.status(200).json({
            users,
            totalCount,
            totalPages,
            hasNextPage,
            hasPreviousPage,
        });
    }
    catch (error) {
        return next((0, error_1.createError)(500, "Internal server error"));
    }
});
exports.getAllUsers = getAllUsers;
const findOneUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.q;
        const user = yield User_1.default.find({
            $or: [
                { name: { $regex: query, $options: "i" } },
                { email: { $regex: query, $options: "i" } },
                { phone: { $regex: query, $options: "i" } },
                { address: { $regex: query, $options: "i" } },
                { postalZip: { $regex: query, $options: "i" } },
                { region: { $regex: query, $options: "i" } },
                { country: { $regex: query, $options: "i" } },
                { list: { $regex: query, $options: "i" } },
                { text: { $regex: query, $options: "i" } },
                { numberrange: { $regex: query, $options: "i" } },
                { currency: { $regex: query, $options: "i" } },
            ],
        });
        res.status(200).json(user);
    }
    catch (error) {
        return next((0, error_1.createError)(500, "Internal server error"));
    }
});
exports.findOneUser = findOneUser;
const fuzzySearch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.q;
        const result = yield User_1.default.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { phone: { $regex: query, $options: 'i' } },
            ],
        });
    }
    catch (error) {
        return next((0, error_1.createError)(500, "Internal server error"));
    }
});
exports.fuzzySearch = fuzzySearch;
