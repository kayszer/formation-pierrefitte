// Commentaire sur un ligne
/**
 * un
 * commentaire
 * sur
 * plusieurs
 * lignes
 */
/**
 * Les variables
 * Une variable est un conteneur servant à stocker temporairement une information ( ou donnée).
 * En javascript on déclarer une variable avec le mot-clé: "var" suivi du nom de la variables, chaque variables doit avoir un nom unique(également appeler en anglais "identifier").
 * Le nom d'une variable doit observer quelques règles à savoir:
 * le nom d'une variable doit commencer par une lettre ;
 * Le nom d'une variable ne peut contenirr que des lettres (non accentuées), des chiffres ou les signes "_" et "$";
 * Le nom d'une variable et sensible à la casse c'est à dire que "a" est différent de "A"
 * le Javascript possède des mots "réservés" qu'on ne peut utilisé pour créé une variable (ex: var, alert, ...).
 */

 // On déclare une variable et on lui affecte immédiatement une valeur 
 var x =25;
 var X = 100; // Celle-ci est différente de la var "x".

 // Ondéclare plusieurs variabes d'un coup

 var nom = "Samba",
 prenom = "Abdou",
 date = "09/04/88";

 //On déclare une variable sans lui affécter de valeur, puis on lui en affecte une valeur ensuite.(Non recommande).
 var age;
 age = 25;

 //On déclare une variable vide lui affécter de valeur une valeur ensuite (Non recommande).
var ville = "";
ville = "pierrefitte";
ville = "paris";

/**
 * En javascript le signe égal (=) n'est pas un opérateur d'égalité mais un opérateur d'affectation càd qu'il sert à affecter (ou assigner) une valeur à une variable et non que la variable est égal à sa valeur. Ainsi on va pouvoir affecter differentes valeurs à une même varianles dans le temps.
 */

x = x + 5;

console.log ("nos variables sont:" + x +'\n' + X + '\n' + nom + prenom + date + '\n' + age + '\n' + ville);

/**
 * Les types de (valeurs de) variables
 * Les types de vont avoir une influence sur notre code, puisqu'on stockera pas de la même façon un chiffre ou une chaîne de caractères (un texte) par exemples dans un variable.
 * Nous ne pourrons pas non plus effectuer les mêmes opérations sur les variables selon le type de valeurs qu'elles stockent
 * 
 * Le type Number
 *Il vas représenter tout le nombre ou chiffre, qu'il soit positif ou négatif, entier ou à virgule. Pour affecter une valeur de type number on utillise ni guillemet ni appostrophe.
 /!\ Attention: en programmation on utilise des notations anglo-saxonne, ce qui signifie qu'il faut faut remplacer nos virgule par des points pour les nombres décimaux.  
 */
var number = 25;
var number2 = -15;
var number3 = 1.09;

/**
 * le type string
 * il va representer les chaînes de caractere càd les textes.
 * pour affecter un chaîne de caractere à une vaariable il faut l'entourer avec des guillemets ou appostrophe
 */

 var text = "lorem ipsum";
 var desc = "lorem ipsilum";
 /**
  * Cependant si la valeur stocker contient elle même des appostrophes ou des guillemets il faudra les échapper au moyen d'un antislash (\)
  */

var dept = "Je suis du \"9.2\""; // Je suis dans des guillemets dons j'echappe les guillemets

var dept = 'Je suis du "9.2"' + '<br>';

document.write(dept + "<br>");

var dept2 = 'J\'habite dans le 9.2'; // Je suis dans des apostrophes dons j'echappe l'apostrophe

var dept2 = "J'habite dans le 9.2";

document.write(dept2+"<br>");

/**
 * Le type boolean (booleen)
 * Un booléen en algèbre c'est une valeur binaire ( soit 0 ou 1), en programmation un booléen va être soit la valeur true (vrai ou 1) soit la valeur false (faux ou 0).
 * pour affecter un boolean à une variable on utilise ni guillemets, ni appostrophe.
 */

var vrai = true;
var faux = false;

/**
 * Les autres types
 * Parmi les autres valeurs possible on peut citer la valeurs "null", qui correspond à la non connaissance, à priori de la valeurs. "undifined", qui correspond au fait de ne pas avoir défini de valeur pour notre variable. "NaN" qui signifie "Not a Number" soit n'est pas un nombre     
 */

var n = null,
u = undefined,
nn=NaN.toExponential

// /!\ Notez qu'il est possible de changer le type d'une valeur d'une variables, la nouvelle écrasera tout simplement l'ancienne.

var tt = 25; //type number
tt = true; //type boolean
tt = null; //type null
tt = "tt"; //type string

/**
 * Pour tester le type de la valeur, on utilise généralement la methode "typeof()"
 */
alert(typeof(tt));

// Déclarer une variable de manière explicite ou implicite
var maVariable = 'toto';// "ma Variable" est ce qu'on appele une écriture camel case.
ma_variable = 'toto';// "ma_variable"  est ce qu'on appelle une écriture snake case.

// Afficher une boite de dialogue
alert("Je sert à afficher des données dans une boites de dialogues");

// afficher dans la console 
console.log("Je sert à afficher des données dans la console");

// Afficher dans le navigateur (page Web)
document.write("Je sert à afficher des données dans la page web <br>");

// Demander à l'utilisateur d'entrer une valeur
prompt("Je sert à afficher des données dans une boites de dialogues qui va demander à l'utilisateur de rentrer des données");

// Méthode ( ou fonction) parseInt(), la méthodes paresInt() renvoie un chiffre entier à partir d'une chaîne de caractère (string)
var unChiffre = "12";

document.write(unChiffre +'<br>');// 12

document.write(typeof (unChiffre) + '<br>');// string

unChiffre = parseInt(unChiffre + '<br>');

document.write(unChiffre +'<br>');//12

document.write(typeof (unChiffre) + '<br>');//number

//Méthode (ou fonction) parseFloat()

var nb_en_lettre = "12.22";

document.write(nb_en_lettre + '<br>'); // 12

document.write(typeof (nb_en_lettre) + '<br>'); // string

nb_en_lettre = parseFloat(nb_en_lettre + '<br>');

document.write(nb_en_lettre + '<br>'); //12

document.write(typeof (nb_en_lettre) + '<br>'); //number


//Méthode toString(), qui sert a convertir en chaînes de caractère

var nb_en_lettre = "258";
document.write(nb_en_lettre + '<br>');
document.write(typeof (nb_en_lettre) + '<br>');

nb_en_lettre = nb_en_lettre.toString();

document.write(nb_en_lettre + '<br>');
document.write(typeof (nb_en_lettre) + '<br>');





// alert("Hello, je me lance depuis le fichier script.js!!");
