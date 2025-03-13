import express from "express"
import { readArtists } from "../utils/helpers.js"
const router = express.Router()

router
    .route("/")
    .get((_req, res) => {
        try {
            const artists = readArtists()
            res.json(artists)
        } catch (error) {
            return readArtists.status(404).send("Bad URL")
        }

    })

router
    .route("/:id")
    .get((req, res) => {
        try {
            const artists = readArtists()
            const selectedArtist = artists.find(
                (artists) => artists.id === req.params.id
            );

            if (!selectedArtist) {
                return res.status(404).json({ message: `Could not find artist with id ${req.params.id}` })
            }

            res.json(selectedArtist)
        } catch (error) {
            return res.status(500).json(error)
        }

    })

export default router