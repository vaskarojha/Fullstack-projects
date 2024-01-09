import express from "express";

import {test, test2} from "../controllers/test.controller.js";

const router = express.Router()

const getTest =  router.get('/id', test)
const getTest2 = router.get('/id2', test2)

 export default (getTest, getTest2)
    

