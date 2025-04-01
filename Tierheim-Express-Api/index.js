const express = require("express");
const cors = require("cors");
const app = express();
const fs  = require("fs"); // File System Modul, damit können wir Dateien lesen und schreiben
const path = require("path");
app.use(express.json()); // Unsere Middleware, die uns ermöglicht den Body aus dem Request auszulesen

// -- CORS brauchen wir nur, wenn zwei verschiedene Hosts kommunizieren sollen --
//app.use(cors({              // CORS (Cross origin resource sharing) aktivieren 
//    origin: "http://localhost:5500"
//}))

// Frontend dateien mit express serven:
app.use(express.static(path.join(__dirname, "frontend")))

// Hilfsfunktion
function readFile(){
    const data = fs.readFileSync("tiere.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data){
    fs.writeFileSync("tiere.json", JSON.stringify(data,null,2)); // JSON.stringify wandelt ein Javascript Objekt in eine JSON Format um
}

app.get("/tiere", (req, res) => {
    try {
        const tiere = readFile();
        res.json(tiere);
    } catch (err) {
        res.status(500).json({error: `Internal Server Error: ${err}`});
    }
});


app.post("/tiere" , (req,res) => {
    try {
        const tiere = readFile();
        const {name, art} = req.body
        
        // Daten validieren bevor ein neues Tier anlegen:
        if (!(name && art)) {
            return res.status(400).json({error: "Name und Art sind Pflichtfelder"});
        }

        const nameTaken = tiere.find((tier) => tier.name == name && tier.art == art);
        if (nameTaken) {
            return res.status(400).json({error: "Es gibt bereits ein Tier mit diesem Namen und dieser Art"});
        }

        if (name.length < 3) {
            return res.status(400).json({error: "Name muss mind. 3 Buchstaben beinhalten!"})
        }
    
        const newTier = {
            id: tiere.length + 1, // besser (komplexere Logik) -> tiere.length > 0 ? Math.max(...tiere.map(a => a.id)) + 1 : 1;
            name: name,
            art: art
        }
        tiere.push(newTier)
        writeFile(tiere)
        res.status(201).json(newTier)
        
    } catch (err) {
        res.status(500).json({error: "Internal Server error!"})
    }
})

app.put("/tiere/:id", (req, res) => {
    try {
        const id = req.params.id;
        const tiere = readFile(); // Datei aufrufen
        const newArt = req.body.art

        const foundTier = tiere.find(tier => tier.id == id)
        foundTier.art = newArt
        res.json(foundTier)
        writeFile(tiere) // in Datei reinschreiben
    } catch (err) {
        res.status(500).json({error: "Internal Server error!"})
    }
})


app.delete("/tiere/:id", (req, res) => {
    try {
        let id = req.params.id;
        // Ist ID eine Zahl?
        if (isNaN(id)) {
            return res.status(400).json({error: "ID muss eine Zahl sein!"})
        }
        id = Number(id)
        const tiere = readFile();
        console.log(`id: ${typeof(id)}`)
        const index = tiere.findIndex(tier => tier.id === id)
        // Haben wir das tier gefunden?
        if (index === -1){
            return res.status(404).json({error: "Tier existiert garnüscht"})
        }
        const entferntesTier = tiere.splice(index, 1)
        writeFile(tiere)
        res.json("erfolgreich gelöscht: " + entferntesTier[0].name)
    } catch (err) {
        res.status(500).json({error: "Internal Server error!"})
    }
})

app.get("/search", (req, res) => {
    const {id, name, art} = req.query;
    let tiere = readFile();
    if (id) {
        tiere = tiere.filter((tier) => tier.id == id);
    }
    if (name) {
        // Mit includes können wir auch teilweise übereinstimmungen filtern:
        tiere = tiere.filter((tier) => tier.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (art) {
        tiere = tiere.filter((tier) => tier.art.toLowerCase() == art.toLowerCase());
    }
    res.json(tiere);
})

app.listen(5005);