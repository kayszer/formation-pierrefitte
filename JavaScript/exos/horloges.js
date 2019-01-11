var heure = Number(prompt("saisir un nombre"))
var min = Number(prompt("saisir un nombre"))
var sec = Number(prompt("saisir un nombre"))

if ((heure >= 0) && (heure <= 23) && (min >= 0) && (min <= 59) && (sec >= 0) && (sec <= 59)){
    sec++;
    if (sec === 60) {
        sec = 00;
        min++
        if (min === 60){
            minute = 00;
            heure++;
            if (heure === 24){
                heure = 00;
            }
        }
    }
    document.write("<h3>Dans une seconde il sera</h3>" + heure + "h" + min +"m"+sec)
}

else {
    document.witre("<h3>L'heure entrer est invalide !!</h3>")
}