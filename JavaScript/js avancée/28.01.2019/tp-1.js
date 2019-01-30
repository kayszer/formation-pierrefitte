var d = new Date();
var m = d.getMonth();
var j = d.getDate();
var h = d.getHours();
var date = d.toLocaleDateString();

Var user = prompt("saisir votre nom")

var prenom = ["kayes", "Moussa", "Djodi"];

document.write("Bienvenue "+ user + "nous somme le " + date + "<br>");

if (m == 0) {
    document.write("bonne année <br>")
}
if ((j == 29) && (m == 0)) {
    document.write("bonne anniversaire " + prenom[0])
} else if ((j == 28) && (m == 0)) {
    document.write("bonne anniversaire " + prenom[1])
} else if ((j == 30) && (m == 0)) {
    document.write("bonne anniversaire " + prenom[2])
}else{
    document.write("Aujourd'hui")
}

if ((h <= "7") || (h >= "20")) {
    document.body.style.backgroundImage = "url(https://milesandlove.com/system/attachments/7486/xlarge/belle-nuit-etoilee-a-la-reunion.jpg?1532457892)";
    document.body.style.color = "white";
    document.body.style.backgroundSize = "cover";
    
} else {
    document.body.style.backgroundImage = "url(http://img.over-blog-kiwi.com/0/66/84/05/obpicrjNvbH.jpeg)";
    document.body.style.color = "white";
    document.body.style.backgroundSize = "cover";
}