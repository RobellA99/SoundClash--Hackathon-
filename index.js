import express from "express"
const app = express()
import cors from "cors"
import "dotenv/config"
const port = process.env.PORT || 8080
import artistsRoutes from "./routes/artistRoutes.js"

app.use(express.json())
app.use(cors())


app.use("/artists", artistsRoutes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);

})