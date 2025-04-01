## Änderungen 01.04.

Heute haben wir viel verändert an unserem Frontend.

## CORS 
CORS erlaubt es verschiedenen Hosts resourcen miteinander auszutauschen. Hierzu müssen wir sie bei express in die Liste der hosts aufnehmen, für die CORS erlaubt ist. Hierzu in der express `index.js`: 
```js
const cors = require("cors");
app.use(cors({                  // CORS (Cross origin resource sharing) aktivieren 
origin: "http://localhost:5500" // Erlaubt sind requests von unserem Live-Server frontend
}))
```

## Ein Frontend, das mit den Routen des Backends kommuniziert. 
Wir haben sehr viel in `frontend/script.js` programmiert. Hier haben wir API-requests via `fetch` an unser backend versendet. 

#### Event Listener
Wir haben zwei Event Listener. Der erste ist für unseren Button. Der Button erfüllt drei Funktionen gleichzeitig! Wie das geht? Wir haben seine Funktion per if-Bedingung an den in unserem Dropdown menu (`<select>`) ausgewählten Wert - `methodSelect.value` - gebunden: 
```js
submitButton.addEventListener("click", () => {
    if (methodSelect.value == "create") {
        createAnimal()
    } else if (methodSelect.value == "change") {
        changeAnimal()
    } else if (methodSelect.value == "delete") {
        deleteAnimal()
    }
})
```
Die tatsächliche Logik haben wir in Hilfsfunktionen geschrieben: `createAnimal()`,  `changeAnimal()` und `deleteAnimal()`. Das haben wir getan, damit unser EventListener nicht so unübersichtlich wird. 

Der zweite Eventlistener macht lediglich das id-input Feld sichtbar oder unsichtbar, immer wenn sich der Wert unseres selector Elements _verändert_ - ein `change` event:
```js
methodSelect.addEventListener("change", () => {
    if (methodSelect.value == "create") {
        idInput.style.display = "none";
    } else if (methodSelect.value == "change") {
        idInput.style.display = "block";
    } else if (methodSelect.value == "delete") {
        idInput.style.display = "block";
    }
}) 
```

#### Logik der HTTP Requests
Unsere Funktionen `createAnimal()`,  `changeAnimal()` und `deleteAnimal()` stellen requests an unser Backend an die entsprechenden Routen. Seht euch noch einmal an, wie die id über die Route mitgegeben wird und in welchen Routen im backend welche informationen abgefragt werden. 
Hier ist es extrem wichtig, dass wir nachvollziehen: 
- Welche Informationen senden wir ans Backend und wie?
- Welche Informationen sendet das Backend zurück und in welchem Format?
Dann wird die Antwort, die `res`ponse, als json entpackt und mit DOM Manipulation auf unserer Website dargestellt.


#### Refresh
Jedesmal wenn wir die infos in `tiere.json` verändern, wollen wir das auch _direkt_ auf der Website darstellen. Allerdings ohne sie zu aktualisieren - zu dem Problem mehr weiter unten. 
Dazu haben wir die `refreshList()` Funktion angelegt. Die können wir überall aufrufen, wo wir explizit die dargestellte Liste neu laden wollen. 
```js
function refreshList(){
    liste.innerHTML = "";
    fetch("http://localhost:5005/tiere")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                let newListItem = document.createElement("li");
                newListItem.innerText = `#${element.id}: ${element.name} (${element.art})`
                liste.appendChild(newListItem)
            });
        })
        .catch(err => {
            console.error("Fehler beim refresh:", err);
        })
}
```
Auch diese Funktion stellt eine HTTP Request an unsere Backend route `"/tiere"`. Die Antwort wird in unsere `liste` per DOM Manipulation eingebaut.

---

## Das Problem mit der automatischen Aktualisierung

Zunächst war das Problem mit dem Live Server. Immer, wenn wir die `tiere.json` Datei veränderten, hat der Live Server die Website neu geladen. Auch nodemon hat immer unseren Server neugestartet.

#### Lösung mit Live Server: 
In einem Verzeichnis `.vscode/` eine Datei `settings.json` anlegen. Hier diesen Code rein kopieren: 
```json
{"liveServer.settings.ignoreFiles": ["tiere.json"]}
```

#### Lösung mit nodemon:
In der `package.json` Datei das start skript erweitern: 
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js --ignore tiere.json" // <-- Hier wird tiere.json ignoriert.
  }
```

