// Chapitre 5

/*
A1. Écrire un algorithme qui affiche un tableau à une dimension d'entiers après l'avoir
initialisé de telle manière que chaque élément soit égal à son indice.
 */
/*
var tab1 = [0, 1, 2, 3, 4, 5];

console.log(tab1);

for (var index in tab1){
    console.log('index ' + index + ' : ' + tab1[index]);
}

*/
/*
A2. Écrire un algorithme qui affiche un tableau à une dimension d'entiers après l'avoir
initialisé avec des valeurs lues au clavier.
 */
/*
var tab = [];

var long = parseInt(prompt('Entrez le nombre de valeur'));

for (i = 0; i < long; i++) {
   tab[i] = prompt('Entrez l\'element en pôsition ' + i);
}

console.log(tab);
*/
/*
A3. Écrire un algorithme qui recherche le maximum d'un tableau à une dimension
d'entiers initialisé à sa déclaration. L'algorithme affichera le tableau avant le
résultat.
*/
/*
var tab = [4, 8, 3, 9, 12, 5, 2];
var maximum = tab[0];

for ( i = 0, max = tab.length; i < max; i++) {
    if (maximum < tab[i]) {
        maximum = tab[i];
    }
}

console.log(tab);
console.log('Le maximum de ce tableau est ' + maximum);

*/

/*
A4. Écrire un algorithme qui recherche le maximum et le nombre de fois qu'il apparaît
dans un tableau à une dimension d'entiers initialisé à sa déclaration. L'algorithme
affichera le tableau avant les résultats.
*/
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];
var maximum = tab[0];
var cptmax = 0;

for (i = 0, max = tab.length; i < max; i++){
    if (maximum < tab[i]){
        maximum = tab[i];
        cptmax = 1;
    } else if (maximum === tab[i]){
        cptmax++;
    }
}

console.log(tab);
console.log("le maximum du tableau est " + maximum + ' et il apparait ' + cptmax + ' fois');
*/

/**************OU****************/
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];
var maximum = tab[0];
var cptmax = 0;

for (var key in tab){
    if (maximum < tab[key]){
        maximum = tab[key];
        cptmax = 1;
    } else if (maximum === tab[key]){
        cptmax++;
    }
}

console.log(tab);
console.log("le maximum du tableau est " + maximum + ' et il apparait ' + cptmax + ' fois');
*/
/*
A5. Écrire un algorithme qui recherche, dans un tableau à une dimension d'entiers
initialisé à sa déclaration, le maximum, le nombre de fois qu'il apparaît et la position
où il apparaît pour la première fois. L'algorithme affichera le tableau avant les
résultats.
*/
/****Les boucles en var in sont intéressante pour récupérer les données mais moins performantes que les boucles for et tab.legth.
 par contre, si on doit juste afficher les données, var in est pratique car en for, les undofined sont affichés
 */
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];
var maximum = tab[0];
var cptmax = 0;
var position = 1;
var index = 0;

for (var key in tab) {
    if(maximum < tab[key]){
        maximum = tab[key];
        cptmax = 1;
        position = parseInt(key)+1;
        index = key;
    } else if (maximum === tab[key]){
        cptmax++;
    }
}
console.log(tab);
console.log("le maximum du tableau est " + maximum + ' et il apparait ' + cptmax + ' fois');
console.log("le maximum aparait la premiere fois en position " + position + ' soit un index de ' + index);
*/

/***********************************OU*************/
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];
var maximum = tab[0];
var cptmax = 0;
var position = 1;
var index = 0;

for (i = 0, max = tab.length; i < max; i++) {
    if(maximum < tab[i]){
        maximum = tab[i];
        cptmax = 1;
        position = i+1;
        index = i;
    } else if (maximum === tab[i]){
        cptmax++;
    }
}
console.log(tab);
console.log("le maximum du tableau est " + maximum + ' et il apparait ' + cptmax + ' fois');
console.log("le maximum aparait la premiere fois en position " + position + ' soit un index de ' + index);

*/

/*A6. Écrire un algorithme qui recherche, dans un tableau à une dimension d'entiers
initialisé à sa déclaration, le maximum, le nombre de fois qu'il apparaît et la position
où il apparaît pour la dernière fois. L'algorithme affichera le tableau avant les
résultats.*/
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];
var maximum = tab[0];
var cptmax = 0;
var position = 1;
var index = 0;

for (i = 0, max = tab.length; i < max; i++) {
    if(maximum < tab[i]){
        maximum = tab[i];
        cptmax = 1;

    } else if (maximum === tab[i]){
        cptmax++;
        position = i+1;
        index = i;
    }
}
console.log(tab);
console.log("le maximum du tableau est " + maximum + ' et il apparait ' + cptmax + ' fois');
console.log("le maximum aparait la premiere fois en position " + position + ' soit un index de ' + index);
*/

/*
A7. Écrire un algorithme qui calcule, dans un tableau à une dimension d'entiers
initialisé à sa déclaration, le nombre d'entiers positifs, le nombre d'entiers négatifs
et le nombre de zéros de ce tableau. L'algorithme affichera le tableau avant les
résultats.
 */
/*
var tab = [4, 8, -3, 16, 0, 5, 2, -12, 4, 0, 16, -14, 13, 2];
var nbre_neg = 0;
var nbre_pos = 0;
var nbre_zero = 0;

for(var key in tab){
    if (tab[key] < 0){
        nbre_neg++;
    }
    if (tab[key] > 0){
        nbre_pos++;
    }
    if (tab[key] === 0){
        nbre_zero++;
    }
}
console.log(tab);
console.log('le nombre de zero est de : ' + nbre_zero);
console.log('le nombre d\'entier positif est de : ' + nbre_pos);
console.log('le nombre d\'entier negatif est de : ' + nbre_neg);
*/

/*
A8. Écrire un algorithme qui calcule, dans un tableau à une dimension d'entiers
initialisé à sa déclaration, la somme des éléments du tableau. L'algorithme affichera
le tableau avant les résultats.
 */
/*
var tab = [4, 8, -3, 16, 0, 5, 2, -12, 4, 0, 16, -14, 13, 2];
var somme = 0;

for(var key in tab){
    somme += tab[key];
}

console.log(tab);
console.log('la somme des elements du tableau est de ' + somme);
*/