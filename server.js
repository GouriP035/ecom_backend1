const express=require('express');
const cors=require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartrouter = require('./routes/carRoutes');

const app=express();


app.use(cors())
app.use(express.json())


connectDB()
app.use("/cart",cartrouter)
app.use("/auth",router)

app.get('/',(req,res)=>{
    res.send('Hello,world!')
})

const port=5000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
