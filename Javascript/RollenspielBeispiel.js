let name = prompt("Wie heißt du, tapferer Held?");
alert("Freut mich, dich kennenzulernen, " + name + "!");

let alter = prompt("Wie alt bist du?");
if (alter >= 18) {
    alert("Du bist alt genug, um in den Kampf zu ziehen!");
    let waffe = prompt("Wählst du das Schwert oder Magie?");
    if (waffe.toLowerCase() === "schwert") {
        alert("Du schwingst dein Schwert und kämpfst tapfer!");
    } else {
        alert("Du wirkst einen mächtigen Zauber!");
    }
} else {
    alert("Du bist noch zu jung. Trainiere weiter und kehre später zurück!");
}