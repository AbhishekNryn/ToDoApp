const express =require('express')
const mongoose=require('mongoose')

const router=require('./routes/todoapp')
require('dotenv').config()



const app=express()
const PORT=5000

mongoose.connect(process.env.MONGODB_URL)
.then(() =>console.log(`connected to mongodb`))
.catch((err)=>console.log(err))

app.use(router)


app.listen(PORT, ()=>console.log(`listening to ${PORT}`))

