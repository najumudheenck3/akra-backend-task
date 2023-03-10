"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - email
 *         - address
 *         - postalZip
 *         - region
 *         - country
 *         - list
 *         - text
 *         - numberrange
 *         - currency
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         phone:
 *           type: string
 *           description: The phone number of the user
 *         email:
 *           type: string
 *           description: The email address of the user
 *         address:
 *           type: string
 *           description: The address of the user
 *         postalZip:
 *           type: string
 *           description: The postal code or zip code of the user
 *         region:
 *           type: string
 *           description: The region of the user
 *         country:
 *           type: string
 *           description: The country of the user
 *         list:
 *           type: string
 *           description: The list of the user
 *         text:
 *           type: string
 *           description: The text of the user
 *         numberrange:
 *           type: string
 *           description: The number range of the user
 *         currency:
 *           type: string
 *           description: The currency of the user
 *   responses:
 *     InternalServerError:
 *       description: Internal server error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Error message
 *               code:
 *                 type: integer
 *                 description: HTTP status code
 *                 example: 500
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - All Users
 *     summary: Get all users
 *     description: Returns a list of all users, with pagination support
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Page number
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         description: Number of items per page
 *         schema:
 *           type: integer
 *           default: 50
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 totalCount:
 *                   type: integer
 *                   description: Total number of users
 *                 totalPages:
 *                   type: integer
 *                   description: Total number of pages
 *                 hasNextPage:
 *                   type: boolean
 *                   description: Indicates if there's a next page
 *                 hasPreviousPage:
 *                   type: boolean
 *                   description: Indicates if there's a previous page
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
/**
 * @swagger
 * /api/users/find-user:
 *   get:
 *     tags:
 *       - Find User
 *     summary: Find a user
 *     description: Find a user by searching through all fields
 *     parameters:
 *       - in: query
 *         name: q
 *         description: Query string to search for
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
/**
 * @swagger
 * /api/users/fuzzy-search:
 *   get:
 *     tags:
 *       - Fuzzy Search
 *     summary: Fuzzy search users
 *     description: Search for users by name or phone number using fuzzy search
 *     parameters:
 *       - in: query
 *         name: q
 *         description: Query string to search for
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
router.get("/", userController_1.getAllUsers);
router.get("/find-user", userController_1.findOneUser);
router.get("/fuzzy-search", userController_1.fuzzySearch);
module.exports = router;
