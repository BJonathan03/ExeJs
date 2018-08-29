// Chapitre 5 H

/*
H1. (intersection) Deux tableaux à une dimension contiennent des entiers triés en
ordre croissant. Écrire un algorithme qui sauve dans un troisième tableau les
éléments communs aux deux premiers tableaux. A tout moment de l'algorithme, les
éléments du troisième tableau restent triés en ordre croissant.
 *//* PROBLEME DE LA VALEUR 3*/

var tab = [1, 3, 4, 6, 7, 8, 10, 12, 13, 15, 18, 20, 24, 28, 30 ];
var tab1 = [ 3, 5, 7, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30 ];
var tab_result = [];
var cpt = 0;

for (i = 0, max = tab.length; i < max; i++){
    cpt = 0;
    while(tab1[cpt] <= tab[i]){
        
        if(tab1[cpt] === tab[i]){
            tab_result.push(tab[i]);
        }
        cpt++;
    }
}


console.log(tab_result);
