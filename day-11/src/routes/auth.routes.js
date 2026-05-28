import { registerUser } from "../controllers/auth.controller.js"

import { Router } from "express"

import { validateRegisterUser } from "../validator/auth.validator.js"

const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post("/register",validateRegisterUser,registerUser)

export default authRouter