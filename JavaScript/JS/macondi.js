// Créé une condition qui si pseudo équivaut à samba et son mail coressppond samba @mail.fr
// Ouvre une 2 boite de dialogue qui demande age et année
// si age est sup à 20 ou année de naissance est superieur à 2000
// Ouvre une boite de dialogue qui si équivaut à vrai renvoi ver le site de votre chooix
// Sinon fait recommencer depuis le début(reload)



//EXO 1


// var prenom = prompt("saisir prenom");
// var mail = prompt("saisir email");
// if ((prenom == "samba") && (mail == "samba@mail.fr")){
//     var age = prompt("saisir votre age");
//     var annee = prompt("saisir année");
//     if ((age = 20) || (annee > 2000)){
//         alert("c'est bon");
//         document.location.href = "https://google.com";
//     }
// }else{
//     location.reload();
// }


//EXO2

// EXERCICE 0
// demander deux nombres à l'utilisateur (dans deux champs distincts)
// au clic sur un bouton, afficher le résultat de la multplication
// exemple avec 4 et 5: "4 multiplié par 5 vaut 20"




// var num1 = Number(prompt("saisir un nombre"));
// var num2 = Number(prompt("saisir un nombre"));
//  alert(num1*num2)

 //EXO3
 
 // demander un nombre à l'utilisateur
 // calculer le modulo de ce nombre divisé par 5
 // Afficher le reste dans une phrase
 // exemple avec 21 : "Si l'on divise 21 par 5, le reste est de 1"


//  var num = Number (prompt("saisir un nombre"));

//  alert("Si l 'on divise " + num + " par 5, le reste est de " + num % 5)

//EXO4
 // documentation : étudiez le fonctionnement de confirm() en javascript
 // Créer un confirm() Javascript
 // si l'utilisateur clique sur oui, afficher une image
 // sinon, afficher une autre image
 var confirmation = confirm("Change ??");

if (confirmation){
    document.body.style.backgroundImage = "url(https://c.wallhere.com/photos/79/81/Real_Madrid-91926.jpg!d)";
    document.body.style.backgroundColor = "#f3f3f3"
}else {
    alert('false');
}