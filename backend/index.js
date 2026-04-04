import express, { json } from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import authRouter from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
dotenv.config()

const app = express();
const port = process.env.PORT || 5000

// MIDDLEWARE==================================
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:"http:localhost:5173",
  credentials:true,
}))


// API ROUTES====================================================
app.use("/api/auth", authRouter)

// PORT===================================
app.listen(port, () => {
  console.log("Server Started")
  connectDb()
})