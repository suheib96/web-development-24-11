const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("name");
const artInput = document.getElementById("art");
const antwortFeld = document.getElementById("antwort");
const liste = document.getElementById("liste");
const methodSelect = document.getElementById("method");
const idInput = document.getElementById("nummer");

submitButton.addEventListener("click", () => {
    if (methodSelect.value == "create") {
        createAnimal()
    } else if (methodSelect.value == "change") {
        changeAnimal()
    } else if (methodSelect.value == "delete") {
        deleteAnimal()
    }
})

methodSelect.addEventListener("change", () => {
    if (methodSelect.value == "create") {
        idInput.style.display = "none";
    } else if (methodSelect.value == "change") {
        idInput.style.display = "block";
    } else if (methodSelect.value == "delete") {
        idInput.style.display = "block";
    }
}) 

window.onload = () => {
    refreshList()
}

function createAnimal() {
    try {
        const requestBody = {
            name: nameInput.value,
            art: artInput.value
        }

        fetch("http://localhost:5005/tiere", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        })  .then(res => res.json())
            .then(data => {
                antwortFeld.innerText = JSON.stringify(data);
                refreshList()
            })
            .catch(err => {
                console.error("Fehler beim POST:", err);
            })
    } catch (err) {
        console.log("fehler bei fetch: " + err)
    }
}

function changeAnimal() {
    fetch(`http://localhost:5005/tiere/${idInput.value}`, {
        method: "PUT", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({art: artInput.value})
    })
    .then(res => res.json())
    .then(data => {
        antwortFeld.innerText = JSON.stringify(data)
        refreshList()
    })
}

function deleteAnimal() {
    fetch(`http://localhost:5005/tiere/${Number(idInput.value)}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        antwortFeld.innerText = JSON.stringify(data)
        refreshList()
    })
}

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

