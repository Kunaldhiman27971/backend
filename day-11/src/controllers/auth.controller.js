export async function registerUser(req, res, next) {
    try {
        
        res.status(201).json({ message: "User registered successfully" })
    }
    catch (err) {
        err.status = 500
        next(err)
    }
}