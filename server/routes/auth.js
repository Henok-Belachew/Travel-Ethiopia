import express from "express";

import { register } from './../controllers/authController.js';
import { login } from './../controllers/authController.js';

const router = express.Router()

router. post('/register', register)
router. post('/Login', login)

export default router
