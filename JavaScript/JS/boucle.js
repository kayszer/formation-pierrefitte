/**
 * LES BOOUCLES
 */
// -- La boucle FOR
/**
 * La Boucle for
 * 1. On initialise un compteur que l'on stocke dans une variable
 * 2. On défini la condition qui doit être vrai
 * 3. On incrément ou on décrémente
 */
// for (var i = 1; i <= 10; i++) {
//   document.write("Tour de boucle n°" + i + "<br>");
// }

/**
 * La boucle while
 * Très utilisée quand on ne connaît pas le nombre de tours de
 * boucles à l'avance
 */
// var j = 1;

// while (j <= 10){
//   document.write("<hr><p>Tour de boucle while n°" + j + "</p>");
//   j++;
// }

// EXERCICE
// j'ai 1000€ sur mon compte
// chaque mois j'ajoute 50€
// combien de temps me faut-il pour avoir 2000€ sur mon compte ?


/**
 * Écrivez une boucle while qui se répète 10 fois. Il est vrai qu'une boucle for
 * serait plus adaptée, mais le but est de vous familiariser avec while.
 */

//  var bc = 1;

//  while (bc <= 10){
//    alert("la boucle while");
//    bc++;
//  }


/**
 * Voici une boucle qui va de 0 à 9
 * 1. Faire une boucle qui va de 7 à 77
 * 2. Faire une boucle qui va de 0 à 100(0..10..20..)
 */


// for (var bc1 = 7; bc1 <= 77; bc1++){
//   document.write(" boucle n°" + bc1 +"<br>");
// }

// for (var bc = 0; bc <= 100; bc += 10){
//   document.write(" boucle n°" + bc + "<br>")
// }

// document.write("<table>");
// for (i = 0; i <= 10; i++){
//   document.write("<tr>")
//   for (j = 0; j <= 10; j++){
//     document.write("<td>");
//     document.write(i * j);
//     document.write("</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</table>");

// var input = '';
// while (true) {
//   input = prompt('Entrez le nom de code');

//   if (input === 'vrai') {
//     break;
//   }
// }
// alert(input);