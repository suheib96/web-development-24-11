const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const artInput = document.getElementById("art");
const antwortFeld = document.getElementById("antwort")

form.addEventListener("submit", (event) => {
    // preventDefault() verhindert neuladen der Seite bei submit event
    event.preventDefault();

    fetch("http://localhost:5005/tiere", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name: nameInput.value, art: artInput.value})
    })  .then(res => res.json())
        .then(data => {
            antwortFeld.innerText = JSON.stringify(data)
            console.log(data)
            event.preventDefault();
        })
})

window.onload = () => {
    fetch("http://localhost:5005/tiere")
    .then(res => res.json())
    .then(data => {
        antwortFeld.innerText = JSON.stringify(data)
    })
}