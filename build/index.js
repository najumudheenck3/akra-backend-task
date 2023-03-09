"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const dbConnect = require('./config/db');
const userRoute = require('./routes/userRoute');
const app = (0, express_1.default)();
const port = 4001;
app.use('/api/users', userRoute);
dbConnect;
app.listen(port, () => {
    console.log(`connected successffully on port ${port}`);
});
