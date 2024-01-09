import express from "express";
import fs from "fs"
import path from 'path'
import multer from "multer";

import { createPost, getPost, getPostById, updatePost,deletePost} from "../controllers/post.controller.js";
import { fileURLToPath } from 'url';

const router = express.Router()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const upload = multer({ dest: 'uploads/' })
// const __dirname = path.dirname(__filename);
const app= express()
app.use('/uploads', express.static(__dirname +'/uploads'))

router.post('/create',upload.single('files'), createPost )
router.get('/getPost', getPost)
router.get('/getPost/:id', getPostById)
router.put('/updatePost', upload.single('files'),updatePost )
router.delete('/deletePost/:id', deletePost)
export default router