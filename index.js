const express = require('express');
const app = express();
const { Allauth } = require('./middleware/Auth');
const  route  = require('./Routes/AllRoute');


// app.use(middleware) // application level middleware
// middleware is passing as a parameter in between the path and callback. this is called routing level middleware.
app.use(Allauth);

app.use('/api',route)

app.listen(5500,()=>{
    console.log("server is running fine");
})