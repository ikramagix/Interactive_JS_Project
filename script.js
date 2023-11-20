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

const firstCard = document.querySelector('.col-md-4 .card');

let editBtn = document.querySelector('.btn-outline-secondary');

editBtn.addEventListener('click', function() {
    firstCard.style.color = 'red';
});

