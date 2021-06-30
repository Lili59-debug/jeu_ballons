document.getElementById('jouer').onclick = lancement;

let compteur = 0;

function lancement() {
    let bouton = document.getElementById('jouer');
    bouton.style.display = "none";
    prenom = window.prompt('Super, allons-y ! Pour commencer, quel est ton prénom ?', 'Bel(le) inconnu(e)');
    message = document.getElementById('message');
    message.innerHTML = "Bienvenue " + "<b>" + prenom + "</b> ! <br>Pour jouer, éclate les ballons en passant ta souris dessus.";
    let ballons = document.getElementById('ballons');
    ballons.style.display = "block";
    let illustration = document.getElementById("illustration");
    illustration.style.display = "none";
}

function eclater(truc) {
    truc.style.display = "none";
    compteur = compteur + 1;
    if (compteur == 25) {
        bravo();
    }
}

function bravo() {
        alert("Bravo " + prenom + " ! Tu as éclaté tous les ballons !")
        message.innerHTML = "Bravo " + prenom + " ! Tu as éclaté tous les ballons !"
}

