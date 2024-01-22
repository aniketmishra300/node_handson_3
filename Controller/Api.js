const home = (req,res)=>{    
    res.send("Home Page")
}

const register = (req,res)=>{
    res.send("registered successfully ")
}

const login = (req,res)=>{
    res.send("login successfully ")
}

const contact = (req,res)=>{
    res.send("Contact Page")
}

module.exports = {home,register,login,contact}