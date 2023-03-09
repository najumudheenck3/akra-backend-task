"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
router.get('/', userController_1.getAllUsers);
router.get('/find-user', userController_1.findOneUser);
router.get('/fuzzy-search', userController_1.fuzzySearch);
module.exports = router;
