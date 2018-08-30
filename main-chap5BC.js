// Chapitre 5 B et C
/*
B1. Écrire un algorithme qui calcule la moyenne des valeurs contenues dans un
tableau à une dimension de nombres décimaux ainsi que le nombre de ces valeurs
supérieures ou égales à la moyenne.
*/
/*
var tab = [5.5, 14.86, -13.74, 9.3, -21.17, 3.3, 0, 18.7, -17.0, 19.87, 19.74, -7.3, -5.25, 6.26];
var moyenne = 0;
var somme = 0;
var nbre_sup = 0;
var nbre_inf = 0;
var nbre_egale = 0;

for(var key in tab){
    somme += tab[key];
}

moyenne = somme/tab.length;

for(var key in tab) {
    if (tab[key] > moyenne){
        nbre_sup++;
    } else if (tab[key] < moyenne){
        nbre_inf++;
    } else {
        nbre_egale++;
    }
}
console.log('La moyenne est de ' + moyenne);
console.log('Le nombre d\'element superieurs a la moyenne est de : ' + nbre_sup);
console.log('Le nombre d\'element inferieurs a la moyenne est de : ' + nbre_inf);
console.log('Le nombre d\'element egales a la moyenne est de : ' + nbre_egale);

*/
/*
Série C: deux boucles for imbriquées
C1. Soit t un tableau à une dimension d'entiers initialisé à sa déclaration. Écrire un
algorithme qui affiche successivement et sur des lignes différentes, le premier
élément du tableau, puis les deux premiers, puis les trois premiers et ainsi de suite
jusqu'à la totalité du tableau. L'algorithme affichera le tableau avant les résultats.
*/
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];
var str = '';

console.log(tab);
for(i = 0, max = tab.length; i < max; i++){
    for(j = 0; j <= i; j++  ){
        str +=  tab[j] + ', ';
    }
    console.log(str);
    str = '';
}
*/
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];
var str = '';
var tab2 = [];

console.log(tab);
for(i = 0, max = tab.length; i < max; i++){
    for(j = 0; j <= i; j++  ){
        tab2.push(tab[j]);
    }
    console.log(tab2);
    tab2  = [];
}
*/

var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];
var tab2 = [];

console.log(tab);

    for(j = 0, max = tab.length; j < max; j++  ){
        tab2.push(tab[j]);
        console.log(tab2);
    }