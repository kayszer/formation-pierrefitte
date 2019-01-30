var b = Math.floor(Math.random() * 100) + 1;
console.log(b);
var nombre = Number(prompt("Entrez un nombre :"));
var tentative = 1;

while (nombre !== b && tentative < 6) {
 if (nombre >= b) console.log(nombre + " est trop grand");
 else if (nombre <= b)
 console.log(nombre + " est trop petit");
 tentative++;
 var nombre = Number(prompt("Entrez un nombre:"));
}

if (nombre == b) console.log("Bravo ! La solution est " + b);
else alert("Vous avez perdu! " + b);