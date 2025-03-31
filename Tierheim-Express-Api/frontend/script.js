const submitButton = document.getElementById("submitButton");
const nameInput = document.getElementById("name");
const artInput = document.getElementById("art");
const antwortFeld = document.getElementById("antwort");

submitButton.addEventListener("click", () => {
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
                console.log(data);
            })
    } catch (err) {
        console.log("fehler bei fetch: " + err)
    }
})

window.onload = () => {
    fetch("http://localhost:5005/tiere")
        .then(res => res.json())
        .then(data => {
            antwortFeld.innerText = JSON.stringify(data);
        })
}