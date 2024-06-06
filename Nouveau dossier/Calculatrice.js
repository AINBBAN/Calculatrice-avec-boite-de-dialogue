function Addition(Nombre1,Nombre2) {
  return Nombre1 + Nombre2;
}
function Multiplication(Nombre1,Nombre2) {
    return Nombre1 * Nombre2;
}
function Soustraction(Nombre1,Nombre2) {
    return Nombre1 - Nombre2;
}
function Division(Nombre1,Nombre2) {
  if(nombreB == 0) {
        throw new Error("Impossible de diviser par 0."); 
  }
    return Nombre1 / Nombre2;
}
let restart = false;
do  {

  do {
      var Choix = Number(prompt("Que souhaitez-vous faire ? \n\n 1- Addition \n 2- Multiplication \n 3- Soustraction \n 4-Division"))

  } while (Choix != 1 && Choix != 2 && Choix != 3 && Choix != 4) 
  do {
      var Nombre1 = Number(prompt("Entrez le premier nombre"))
      var Nombre2 = Number(prompt("Entrez le deuxième nombre"))

  } while (isNaN(Nombre1) || isNaN(Nombre2));

  try{ 
  switch (Choix) {
      case  1: 
        var resultat = Addition(Nombre1,Nombre2);
          break;
      case  2:
        var resultat = Multiplication(Nombre1,Nombre2);
          break;
      case   3 :
        var resultat = Soustraction(Nombre1,Nombre2);
        break;
      case   4 :
        var resultat = Division(Nombre1,Nombre2);   
          break;
       default:
            throw new Error("Il y'a une erreur.");
}
        alert("Le resultat est " + resultat);
}
    catch(error){
        alert(error);
}
  restart = confirm("Voulez-vous recomencer ?");
}while(restart);




