////////////////////////////////////F1////////////////////////////////////
//CLICK & COUNT

const footer = document.querySelector("footer");
let countMyClicks = 0;

footer.addEventListener("click", function () {
  countMyClicks++;
  console.log("Tu critiques mais t'as cliqué " + countMyClicks + " fois !");
});

/* Mais dis donc Jamy, que fais-tu exactement ? 

---> On selectionne le footer.
---> On initie le compteur de clics.
---> On incrémente à chaque event (click).
---> On affiche le résultat en console (console.log).

*/

////////////////////////////////////F2////////////////////////////////////
//TOGGLE MENU

const menuBtn = document.querySelector(".navbar-toggler");
const navHead = document.getElementById("navbarHeader");

menuBtn.addEventListener("click", function () {
  navHead.classList.toggle("collapse");
});

/* Mais dis donc Jamy, que fait .toggle exactement ?

navHead a la classe ("collapse") ? ---> classe supprimée (= menu caché)
navHead n'a pas la classe ("collapse") ? ---> classe ajoutée (= menu affiché)

----> Chaque fois que le bouton est cliqué, la fonction est déclenchée.
*/

////////////////////////////////////F3////////////////////////////////////
//REDit BUTTON

const firstCard = document.querySelectorAll(".card")[0];

let editBtnFirst = document.querySelectorAll(".btn-outline-secondary")[0];

editBtnFirst.addEventListener("click", function () {
  firstCard.style.color = "red";
});

/* Mais dis donc Jamy, que fais-tu exactement ?

---> On séléctionne la card et le bouton correspondant avec leurs classes et index respectifs
---> On lie l'event click sur le editBtn à une modification de la couleur du texte sur firstCard
---> Pas de possibilité d'annuler le changement car pas de conditions comme en bas (if/else)

*/

////////////////////////////////////F4////////////////////////////////////
//Green Washing

const secondCard = document.querySelectorAll(".card")[1];
const editBtnSecond = document.querySelectorAll(".btn-outline-secondary")[1];

editBtnSecond.addEventListener("click", function () {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "";
  } else {
    secondCard.style.color = "green";
  }
});

/* Mais dis donc Jamy, que fais-tu exactement ?

---> Même démarche qu'avant avec index[] pour la selection
---> On lie l'event click a une fonction qui va s'executer au click
*/

/* Mais dis donc Jamy, que pourquoi un "" vide ?

---> Une fois event click :
---> Verifie si la couleur est "green" ?
---> Si oui, ("") réinitialise la couleur du texte à la couleur par défaut (du CSS ou du browser)
---> Si non, définit la couleur en "green"

*/

////////////////////////////////////F5////////////////////////////////////
//Nuclear Power Plant

const bootstrapLink = document.querySelector('head link[rel="stylesheet"]');
const header = document.querySelector('header');

header.addEventListener("dblclick", function () {
    if (bootstrapLink) {
        bootstrapLink.disabled = !bootstrapLink.disabled;
    }
});

/* Mais dis donc Jamy, que fais-tu exactement ?

---> Je selectionne le lien de mon bootstrap par son attribut stylesheet
---> Je selectionne la zone ou je souhaite que l'action s'effectue, et je la stocke dans une variable
---> On applique l'eventListener sur un doubleclick sur le header
---> Si bootstraplink existe, alors...
---> Bascule l'état du lien entre activé et désactivé avec bootstrapLink.disabled = !bootstrapLink.disabled;

*/

const viewButtons = document.querySelectorAll('.btn-success');
const cards = document.querySelectorAll('.card');

viewButtons.forEach((button, index) => {
  button.addEventListener('mouseover', function () {
    cards[index].style.transform = 'scale(0.8)';
    cards[index].querySelector('.card-img-top').style.transform = 'scale(0.2)';
    cards[index].style.transition = 'transform 0.5s ease';
    cards[index].querySelector('.card-text').style.opacity = '0';
  });

  button.addEventListener('mouseout', function () {
    cards[index].style.transform = 'scale(1)';
    cards[index].querySelector('.card-img-top').style.transform = 'scale(1)';
    cards[index].querySelector('.card-text').style.opacity = '1'; 
  });
});

/* Mais dis donc Jamy, que fais-tu exactement ?

---> Sélectionne tous les boutons avec la classe "btn-success", les stocke dans la variable.
---> Pareil, mais pour les cards. 
---> On lance une boucle, avec button et index comme paramètres
---> Sur chaque itération de button, on écoutera l'event mouseover (survol du curseur) et on appliquera :

--------------------card [selectionnée par index]--------------------
-----------------------------'mouseover'-----------------------------

-----------| sera redimensionné à 80%
-----------| image sera redimensionnée à 20%
-----------| transition d'animation sera d'une durée de 0.5s
-----------| opacité du texte sera 0 = invisible

--------------------card [selectionnée par index]--------------------
-----------------------------'mouseout'------------------------------

-----------| reprendra sa taille d'origine (1)
-----------| image reprendra sa taille d'origine
-----------| opacité du texte sera 1 = visible


*/