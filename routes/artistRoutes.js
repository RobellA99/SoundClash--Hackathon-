import express from "express"
import { readArtists } from "../utils/helpers.js"
const router = express.Router()

router.get("/", (_req, res) => {
    const artists = readArtists()
    res.status(200).json(artists)
})

export default router