function Addition(...nombres) {
    let resultat = 0;
    nombres.forEach(nombre => {
        resultat += nombre;
    });
    return resultat;
}

function Soustraction(...nombres) {
    if (nombres.length === 0) return 0;
    let resultat = nombres[0];
    for (let i = 1; i < nombres.length; i++) {
        resultat -= nombres[i];
    }
    return resultat;
}

function Multiplication(...nombres) {
    if (nombres.length === 0) return 0;
    let resultat = nombres[0];
    for (let i = 1; i < nombres.length; i++) {
        resultat *= nombres[i];
    }
    return resultat;
}

function Division(...nombres) {
    if (nombres.length === 0) return 0;
    let resultat = nombres[0];
    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] === 0) {
            throw new Error("Division par zéro impossible.");
        }
        resultat /= nombres[i];
    }
    return resultat;
}

let restart = false;

do {
    let choix;
    do {
        var Choix = Number(prompt("Que souhaitez-vous faire ? \n\n 1- Addition \n 2- Multiplication \n 3- Soustraction \n 4-Division"))
    } while (Choix != 1 && Choix != 2 && Choix != 3 && Choix != 4);

    let nombres = [];
    let count = 0; 

    do {
        var input = prompt("Entrez votre nombre");

        if (input === null) {
            if (count < 2) {
                alert("Vous devez entrer au moins deux nombres avant de pouvoir annuler.");
                continue; 
            } else {
                break; 
            }
        }
        var nombre = Number(input);
        if (!isNaN(nombre)) {
            alert("Vous avez entré le nombre : " + nombre);
            nombres.push(nombre); 
            count++; 
        } else {
            alert("Ce n'est pas un nombre valide.");
        }
    } while (true);

    try {
        switch (Choix) {
            case 1:
                var resultat = Addition(...nombres);
                break;
            case 2:
                var resultat = Multiplication(...nombres);
                break;
            case 3:
                var resultat = Soustraction(...nombres);
                break;
            case 4:
                var resultat = Division(...nombres);;
                break;
            default:
                throw new Error("Il y'a une erreur.");
        }
        alert("Le resultat est " + resultat);
    }
    catch (error) {
        alert(error);
    }
    restart = confirm("Voulez-vous recomencer ?");
} while (restart);


