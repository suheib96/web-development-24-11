const express = require("express");
const app = express();
const fs  = require("fs"); // File System Modul, damit können wir Dateien lesen und schreiben
app.use(express.json()); // Unsere Middleware, die uns ermöglicht den Body aus dem Request auszulesen

// Hilfsfunktion
function readFile(){
    const data = fs.readFileSync("tiere.json", "utf-8");
    return JSON.parse(data);}

function writeFile(data){
    fs.writeFileSync("tiere.json", JSON.stringify(data,null,2)); // JSON.stringify wandelt ein Javascript Objekt in eine JSON Format um
}

app.get("/tiere", (req, res) => {
    const tiere = readFile();
    res.json(tiere);
});

app.post("/tiere" , (req,res) => {
    const tiere = readFile();
    const {name, art} = req.body
    
    if(name && art){
        const newTier = {
            id: tiere.length + 1, // besser (komplexere Logik) -> tiere.length > 0 ? Math.max(...tiere.map(a => a.id)) + 1 : 1;
            name: name,
            art: art
        }
        tiere.push(newTier)
        writeFile(tiere)
        res.status(201).json(newTier)
    }
    else {
        res.send("Daten unvollständig")
    }
})

app.put("/tiere/:id", (req, res) => {
    const id = req.params.id;
    const tiere = readFile(); // Datei aufrufen
    const newArt = req.body.art

    const foundTier = tiere.find(tier => tier.id == id)
    foundTier.art = newArt
    res.json(foundTier)
    writeFile(tiere) // in Datei reinschreiben
})


app.delete("/tiere/:id", (req, res) => {
    const id = req.params.id;
    const tiere = readFile();
    const index = tiere.findIndex(tier => tier.id == id)
    const entferntesTier = tiere.splice(index, 1)
    writeFile(tiere)
    res.json("erfolgreich gelöscht: " + entferntesTier[0].name)
})
app.listen(5005);