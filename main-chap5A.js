// Chapitre 5

/*
A1. �crire un algorithme qui affiche un tableau � une dimension d'entiers apr�s l'avoir
initialis� de telle mani�re que chaque �l�ment soit �gal � son indice.
 */
/*
var tab1 = [0, 1, 2, 3, 4, 5];

console.log(tab1);

for (var index in tab1){
    console.log('index ' + index + ' : ' + tab1[index]);
}

*/
/*
A2. �crire un algorithme qui affiche un tableau � une dimension d'entiers apr�s l'avoir
initialis� avec des valeurs lues au clavier.
 */
/*
var tab = [];

var long = parseInt(prompt('Entrez le nombre de valeur'));

for (i = 0; i < long; i++) {
   tab[i] = prompt('Entrez l\'element en p�sition ' + i);
}

console.log(tab);
*/
/*
A3. �crire un algorithme qui recherche le maximum d'un tableau � une dimension
d'entiers initialis� � sa d�claration. L'algorithme affichera le tableau avant le
r�sultat.
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
A4. �crire un algorithme qui recherche le maximum et le nombre de fois qu'il appara�t
dans un tableau � une dimension d'entiers initialis� � sa d�claration. L'algorithme
affichera le tableau avant les r�sultats.
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
A5. �crire un algorithme qui recherche, dans un tableau � une dimension d'entiers
initialis� � sa d�claration, le maximum, le nombre de fois qu'il appara�t et la position
o� il appara�t pour la premi�re fois. L'algorithme affichera le tableau avant les
r�sultats.
*/
/****Les boucles en var in sont int�ressante pour r�cup�rer les donn�es mais moins performantes que les boucles for et tab.legth.
 par contre, si on doit juste afficher les donn�es, var in est pratique car en for, les undofined sont affich�s
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

/*A6. �crire un algorithme qui recherche, dans un tableau � une dimension d'entiers
initialis� � sa d�claration, le maximum, le nombre de fois qu'il appara�t et la position
o� il appara�t pour la derni�re fois. L'algorithme affichera le tableau avant les
r�sultats.*/
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
A7. �crire un algorithme qui calcule, dans un tableau � une dimension d'entiers
initialis� � sa d�claration, le nombre d'entiers positifs, le nombre d'entiers n�gatifs
et le nombre de z�ros de ce tableau. L'algorithme affichera le tableau avant les
r�sultats.
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
A8. �crire un algorithme qui calcule, dans un tableau � une dimension d'entiers
initialis� � sa d�claration, la somme des �l�ments du tableau. L'algorithme affichera
le tableau avant les r�sultats.
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