import fs from "fs"

const readArtists = () => {
    try {
        const artists = fs.readFileSync("./data/artists.json")
        return JSON.parse(artists)
    } catch (error) {
        console.log("error reading ");

    }
}