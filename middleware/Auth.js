const Allauth = (req,res,next)=>{
    console.log("middleware for All_auth is running")
    next()
}

const SpecialAuth = (req,res,next)=>{
    console.log("middleware for Special_Auth is running")
   next()
}

module.exports ={Allauth,SpecialAuth}