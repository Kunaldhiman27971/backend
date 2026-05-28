// Validation middleware using express-validator isko hm use kr rhe hai to validate the request body before it reaches the controller function 
import { body, validationResult } from "express-validator"

const validate =
    (req, res, next) => {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            return next()
        }
        return res.status(400).json({ error: errors.array() })
    }

export const validateRegisterUser =
    [
        body("username").isString().withMessage("Username should be string"),
        body("email").isEmail().withMessage("Invalid email format"),
        body("password").custom((value) => {
            if (value.length < 6) {
                throw new Error("Password should be at least 6 characters long and contain at least one number and one special character and one uppercase letter")
            }
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/
            if (!passwordRegex.test(value)) {
                throw new Error("Password should be at least 6 characters long and contain at least one number and one special character and one uppercase letter")
            }
            return true

        }).withMessage("Invalid password format")
        ,
        validate
    ]

