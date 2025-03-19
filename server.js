const express=require('express');
const cors=require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartrouter = require('./routes/carRoutes');

const app=express();
const allowedOrigins=["ecom-frontend-teceh5ibc-gouramma-patils-projects.vercel.app",
    "ecom-frontend-orcin-one.vercel.app"
]
app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies and authentication headers if needed
  }

))
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
