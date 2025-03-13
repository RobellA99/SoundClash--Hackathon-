import express from "express"
const app = express()
import cors from "cors"
import "dotenv/config"
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())