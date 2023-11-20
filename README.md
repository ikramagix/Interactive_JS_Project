# Interactive JS : Mise en pratique 

## Introduction

Ce repository contient des exercices JavaScript et des exemples de manipulation du DOM pour développer des fonctionnalités spécifiques sur une page HTML.

## Fonctionnalités implémentées :

### 1. Click & Count

- Utilisation de `addEventListener` pour détecter le clic.
- Quand tu cliques sur le footer, un message avec le décompte s'affiche en console.


> *Mais dis donc Jamy, que fais-tu exactement ?*

> ---> On séléctionne le footer.<br>
> ---> On initie le compteur de clics. <br>
> ---> On incrémente à chaque event (click).<br>
> ---> On affiche le résultat en console (console.log).<br>

### 2. Toggle Toggle Toggle by Json Decodo

- Utilisation de `classList.toggle` pour le toggle.
- Quand tu cliques sur le menu hamburger (les trois lignes), la classe "collapse" est ajoutée ou supprimée de l'élément avec l'ID "navbarHeader".

> *Mais dis donc Jamy, que fait .toggle exactement ?*

> navHead a la classe ("collapse") ? <br>
> ---> classe supprimée (= menu caché) <br>
> navHead n'a pas la classe ("collapse") ? <br>
> ---> classe ajoutée (= menu affiché)

### 3. REDit button

- Utilisation de `style.color` pour changer la couleur du texte.
- Quand tu cliques sur le bouton *edit* de la première card, il devient et reste rouge.

> *Mais dis donc Jamy, que fais-tu exactement ?*

> ---> On séléctionne la card et le bouton correspondant avec leurs classes et index respectifs <br>
> ---> On lie l'event click sur le editBtn à une modification de la couleur du texte sur firstCard <br>
> ---> Pas de possibilité d'annuler le changement car pas de conditions comme ici bas (if/else)

### 4. Green Green Green Washing!

- Utilisation de `style.color` et une alternance soumise à condition.
- Quand tu cliques sur le bouton *edit* de la deuxième card, il devient vert, si tu recliques, il reprend sa couleur d'origine.

> *Mais dis donc Jamy, que fais-tu exactement ?*

> ---> Même démarche qu'avant avec index[] pour la selection<br>
> --> On lie l'event click a une fonction qui va s'executer au click (le changement de couleur)<br>

> *Mais dis donc Jamy, pourquoi un "" vide ?*

> ---> Une fois event click :<br>
> ---> Verifie si la couleur est "green" ? <br>
> ---> Si oui, ("") réinitialise la couleur du texte à la couleur par défaut (du CSS ou du browser)<br>
> ---> Si non, définit la couleur en "green"

### 5. Boot-Strip

- Utilisation de `addEventListener` avec `dblclick`.
- Au double-clic sur la navbar, le lien vers Bootstrap est désactivé ou réactivé.

> *Mais dis donc Jamy, que fais-tu exactement ?*

> ---> Je sélectionne le lien de mon Bootstrap par son attribut `stylesheet`.<br>
> ---> Je sélectionne la zone où je souhaite que l'action s'effectue (le header), et je la stocke dans une variable.<br>
> ---> On applique l'eventListener sur un doubleclick sur le header.<br>
> ---> Si bootstraplink existe, alors...<br>
> ---> Bascule l'état du lien entre activé et désactivé avec bootstrapLink.disabled = !bootstrapLink.disabled;

### 6. Cards kaléidoscopiques

- Utilisation de `style.transform`, `style.transition`, et `style.opacity` avec `mouseover` et `mouseout`
- En passant le curseur de la souris sur le bouton *view*, la taille des cards et des images diminue (20% pour les cards, 80% pour les images). 
- Un effet de transition est appliqué, et le texte des cartes disparaît et réapparaît également.

> *Mais dis donc Jamy, que fais-tu exactement ?*

> ---> Sélectionne tous les boutons avec la classe "btn-success", les stocke dans la variable.<br>
> ---> Pareil, mais pour les cards. <br>
> ---> On lance une boucle, avec button et index comme paramètres. <br>
> ---> card [`élément sélectionné par index`] et action ensuite

> On écoutera l'event (survol du curseur) et selon le mouvement :


> | card [`sélectionnée par index`] | action [`mouseover`] |
> | ------ | ----- |
> | Modifications | - La carte sera redimensionnée à 80%.<br>- L'image sera > redimensionnée à 20%.<br>- Une transition d'animation d'une durée de 0.5s > sera appliquée.<br>- L'opacité du texte sera réduite à 0, le rendant invisible. |


> | card [`sélectionnée par index`] | action [`mouseout`] |
> | ------ | ----- |
> | Annulations | - La carte reprendra sa taille d'origine (100%).<br>-
L'image reprendra sa taille d'origine.<br>- L'opacité du texte sera rétablie à 1, le rendant visible. |