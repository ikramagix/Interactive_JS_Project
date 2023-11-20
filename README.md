# Projet Interactive JS : Mise en pratique 

## Introduction

Ce repository contient des exercices JavaScript et des exemples de manipulation du DOM pour développer des fonctionnalités spécifiques sur une page HTML.

## Fonctionnalités implémentées :

### 1. Click & Count

- Utilisation de `addEventListener` pour détecter le clic.
- Quand tu cliques sur le footer, un message avec le décompte s'affiche en console.


> *Mais dis donc Jamy, que fais-tu exactement ?*

> ---> On selectionne le footer.<br>
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
> ---> classe ajoutée (= menu affiché) <br>

> ----> Chaque fois que le bouton est cliqué, la fonction est déclenchée