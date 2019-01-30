var colors = ['red', 'blue', 'yellow', 'teal', 'purple', 'fuchsia', 'lime', 'maroon', 'olive', 'aqua', 'navy'];

// Construction de l'abre et de ses niveaux
var initSapin = function () {
    var container = document.getElementById('sapin-container');
    var niveaux = container.childNodes;
    var premierNiveau = false; // Permet de ne pas appliquer de largeur à la pointe du sommet

    document.getElementById('sapin-container').style.maxHeight = document.getElementById('sapin-container').style.height;

    for (var i = 0; i < niveaux.length; i++) {
        if (niveaux[i].nodeType == 1 && niveaux[i].className == 'sapin-niveau') {
            if (premierNiveau) {
                niveaux[i].style.width = i * 50 + 'px';
            }

            premierNiveau = true;
        }
    }
};

var initNuages = function () {
    var x = -100; // -100 pour que le premier nuage ne commence pas pile à 0 car dans ce cas on verrai tout le rond;
    var nuage = null;

    while (x < document.getElementById('commande').offsetWidth) {
        nuage = document.createElement('div');

        nuage.className = 'nuage';
        nuage.style.top = aleatoire(99) + 80 + 'px';
        nuage.style.left = x + 'px';

        x += 40;
        document.getElementById('commande').appendChild(nuage);
    }
};

// Ajoute un nouveau niveau juste avant le tronc
function ajouterNiveau() {
    // On récupère le dernier niveau afin de savoir quel est le dernier niveau construit grâce à l'attribut data-niveau
    var dernierNiveau = document.querySelector('.sapin-niveau:last-child');

    var newNiveau = document.createElement('div');

    newNiveau.className = 'sapin-niveau';
    // On augmente l'attribut data-niveau de 1 par rapport au dernier enfant
    newNiveau.setAttribute('data-niveau', parseInt(dernierNiveau.getAttribute('data-niveau')) + 1);
    // On augmente de 50px la largeur du nouveau niveau
    newNiveau.style.width = (parseInt(dernierNiveau.style.width) + 50) + 'px';

    document.getElementById('sapin-container').appendChild(newNiveau);
}

// Ajoute un nouveau niveau juste avant le tronc
function supprimerNiveau() {
    // On récupère le dernier niveau afin de savoir quel est le dernier niveau construit grâce à l'attribut data-niveau
    var dernierNiveau = document.querySelector('.sapin-niveau:last-child');

    if (dernierNiveau.getAttribute('data-niveau') > 1)
        document.getElementById('sapin-container').removeChild(dernierNiveau);
}

function flocon() {
    if (document.getElementById('toogleFlocon').checked) {
        var container = document.getElementById('sapin-container');
        var top = container.offsetTop;
        var left = container.offsetLeft;
        var width = container.offsetWidth;
        var height = container.offsetHeight;

        // Création d'une ligne de flocon
        for (var i = 0; i < document.getElementById('densite').value; i++) {
            var flocon = document.createElement('div');

            flocon.className = 'flocon';
            flocon.style.top = ((aleatoire(3) * 10) + top - 10) + 'px'; // -10 pour que les flocons commencent à tomber depuis les nuages
            flocon.style.left = (aleatoire(width) - 10) + 'px'; // On soustrait 10 car le carré d'un flocon a une largeur de 10px;

            document.getElementById('flocon-container').appendChild(flocon);
        }

        // Déplacement des flocons
        var flocons = document.getElementById('flocon-container').childNodes;
        var vent = null;

        // Définition du vent
        if (document.getElementById('vent').value != 0) {
            vent = document.getElementById('vent').value; // vent = 1 ou -1
        }

        for (var i = 0; i < flocons.length; i++) {
            if (document.getElementById('vent').value == 0) { // On est obligé de mettre cette partie dans la boucle pour que chaque flocon ait sa propre trajectoire
                vent = signe();
            }

            if (flocons[i].nodeType == 1) {
                flocons[i].style.top = (parseInt(flocons[i].style.top) + 10) + 'px';
                flocons[i].style.left = (vent * aleatoire(20) + parseInt(flocons[i].style.left)) + 'px';
            }
            // Suppression des flocons
            if (parseInt(flocons[i].style.top) > top + height + 150 - 10) { // -10 car il y avait un bug, les flocons tombait 10px trop bas sous le sapin
                document.getElementById('flocon-container').removeChild(flocons[i]);
            }
        }
    } else {
        document.getElementById('flocon-container').innerHTML = "";
    }
}

function parkle() {
    if (document.getElementById('toogleBoule').checked) {
        var niveau, trapeze, width, height, top, left, boule;

        // Suppression des boules avant d'en faire appraître de nouvelles
        childs = document.getElementById('sapin-container').childNodes;

        for (var i = 0; i < childs.length; i++) {
            if (childs[i].nodeType == 1 && childs[i].className == 'sapin-niveau') {
                childs[i].innerHTML = "";
            }
        }

        // Création des boules
        for (var i = 0; i < document.getElementById('nb_boule').value; i++) {
            niveau = aleatoire(parseInt(document.querySelector('.sapin-niveau:last-child').getAttribute('data-niveau')) + 1); // On défini sur quel niveau on va ajouter une boule

            trapeze = document.querySelector('.sapin-niveau[data-niveau="' + (niveau) + '"]');
            width = trapeze.offsetWidth;
            height = trapeze.offsetHeight;
            top = trapeze.offsetTop;
            left = trapeze.offsetLeft;

            boule = document.createElement('div');

            boule.className = "boule";
            boule.style.top = aleatoire(80) + "px"; // 100 - 20
            boule.style.left = aleatoire(width - 140) - 40 + "px"; // -160 trouvé par tatonnement
            boule.style.backgroundColor = colors[aleatoire(colors.length)];

            trapeze.appendChild(boule);
        }
    } else {
        var childs = document.getElementById('sapin-container').childNodes;

        for (var i = 0; i < childs.length; i++) {
            if (childs[i].nodeType == 1 && childs[i].className == 'sapin-niveau') {
                childs[i].innerHTML = "";
            }
        }
    }
}

function aleatoire(max) {
    return Math.floor(Math.random() * max);
}

function signe() {
    var nb = Math.floor(Math.random() * 100);

    if (nb < 50) {
        return 1;
    } else {
        return -1;
    }
}