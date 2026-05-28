import dotenv from "dotenv"

dotenv.config()

function handleError(err,req,res,next){
    const respone={
        message:err.message
    }
    if(process.env.NODE_ENVIRONMENT==="development"){
        respone.stack=err.stack
    }
    res.status(err.status).json(respone)
}

export default handleError