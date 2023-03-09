import  express, { Router }  from "express";
import { findOneUser, fuzzySearch, getAllUsers } from "../controller/userController";
const router:Router = express.Router();


router.get('/',getAllUsers)

router.get('/find-user',findOneUser)

router.get('/fuzzy-search',fuzzySearch)

module.exports = router;