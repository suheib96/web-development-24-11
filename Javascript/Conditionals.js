let x = 7;

// ist gleich / ungleich
console.log(x == 7); // true
console.log("Hallo" == "hallo"); //false
console.log(x != 8); // true
console.log("3" == 3); //true -> == vergleicht nur den "Inhalt"
console.log("3" === 3); // false -> === vergleicht den "Inhalt" UND den Datentypen
console.log("Hallo" !== "hallo"); // true
console.log(2 + 1 == 3); // true

// ist größer als
console.log("_____________________________");
console.log(3 > 7); //false
console.log(7 > 3); // true

// ist kleiner als
console.log("_____________________________");
console.log(3 < 7); //true
console.log(7 < 3); // false

//ist kleiner gleich / ist größer gleich
console.log("_____________________________");
console.log(3 <= 3); // true
console.log(7 >= 7); // true

console.log("_____________________________");
let alter = 17;

if (alter >= 18) {
  console.log("Du darfst den Horrorfilm schauen");
} else {
  console.log("Du bist leider zu jung. Guck Sandmann");
}
console.log("_____________________________");

// bmi calculator
// gewicht / ( höhe * höhe )

let weightInKg = 60;
let heightInMeter = 1.56;

let bmiResult = weightInKg / (heightInMeter * heightInMeter);

if (bmiResult < 20){
    console.log("Du bist Untergewichtig")
}
else if(bmiResult >= 20 && bmiResult <= 24.9){
    console.log("Du hast ein normales Gewicht")
}
else if(bmiResult >=25 && bmiResult < 30){
    console.log("Du hast Übergwicht")
}
else{
    console.log("Du hast Starkes Übergewicht laut Bmi")
}

