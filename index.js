import express, { Router, json } from 'express'
import mongoose from "mongoose"
import cors from 'cors'
mongoose.connect('mongodb://127.0.0.1:27017/Bank')
  .then(() => console.log('Connected!'));


import UserRouter from './Routes/User.js'

const app=express()

app.use(cors())
app.use(express.json())

app.use('/user',UserRouter)


app.listen(4000)