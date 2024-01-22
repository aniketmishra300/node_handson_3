const express = require('express')
const app= express()


const middleware = (req,res,next)=>{
    console.log("middleware is running")
    next()
}

const middleware2 = (req,res,next)=>{
    console.log("middleware2 is running")
   next()
}

// app.use(middleware) // application level middleware
app.use(middleware);

app.get('/',(req,res)=>{    
// middleware is passing as a parameter in between the path and callback. this is called routing level middleware.
    res.send("Home Page")
})

app.get('/about',middleware2,(req,res)=>{
    res.send("About Page")
})

app.get('/contact',middleware,(req,res)=>{
    res.send("About Page")
})

app.listen(5500,()=>{
    console.log("server is running fine");
})