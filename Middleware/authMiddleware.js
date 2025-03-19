const jwt=require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
    const authHeader=req.header("Authorization")

    if(!authHeader)return res.status(401)
        .json({message:"Invalid authorization"})

        const token=authHeader.split(" ")[1]
        if(!token)return res.status(401)
            .json({message:"no token provided"})
            try{
        const verified=jwt.verify(token,process.env.JWT_SECRET)
        req.user=verified
        next()
        }
        catch(err){
            return res.status(401).json({message:"Invalid token"})
        }
}      

module.exports=authMiddleware
//Authorization:Bearer,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDdhYTY0ZWY3ZTkyYTZlNDUxZDFkNiIsImlhdCI6MTc0MjE4NzEyOH0.QrCYSrFb7VuCeqjJi6Tfc7uwnjLkmDt2DjgDKp10V5I