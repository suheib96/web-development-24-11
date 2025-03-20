let i = 1;

// console.log(i)
// i++ -> i = i + 1
// console.log(i)

// For Loop -> start; ende; sprungwert

for (i; i < 1; i++) {
  console.log("Senda hat diese For Schleife geschrieben " + i);
}
console.log("Ich bin raus aus der Schleife");

let programmingLanguages = [
  "C#",
  "Python",
  "C",
  "Java",
  "Javascript",
  "C++",
  "Go",
  "Ruby",
  "Rust",
  "Cobol",
  "Bash",
];

for (x of programmingLanguages){
    console.log("Programmier Sprache: " + x)
}

console.log("Ich bin raus aus der Schleife")

for (x of "Zsuzsanna"){
    console.log("Suheib ist der tollste")
}


let zahl = 200
while(zahl < 400){
    console.log("Joshua ist der beste")
    zahl++   
}

// do/while Schleife -> Der Code wird garantiert mindestens einmal ausgeführt
let zahl2 = 25
do {
    console.log("Javascript ist cool")
    zahl2--
}
while (zahl2 > 20)