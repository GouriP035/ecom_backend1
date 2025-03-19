const express=require('express')
const authMiddleware = require('../Middleware/authMiddleware')
const { addToCart, getCart, removeFromCart } = require('../controllers/cartContoller')



const cartrouter=express.Router()

cartrouter.post("/add",authMiddleware,addToCart)
cartrouter.get("/",authMiddleware,getCart)
cartrouter.post("/remove",authMiddleware,removeFromCart)


module.exports=cartrouter