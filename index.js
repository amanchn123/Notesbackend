const dotenv=require('dotenv')
const connection=require("./connection")
const express=require("express")
const cors =require('cors')
const app=express()
app.use(express.json())
dotenv.config()
connection()

app.use(cors({origin:"*"}))

app.use('/api',require("./Routes/Notes.js"))
app.use('/api',require("./Routes/Teacher"))

app.listen(5000 || process.env.Port)