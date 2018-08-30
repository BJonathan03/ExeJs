// Chapitre 5 D

/*
D1. Écrire un algorithme qui opère un décalage à gauche (shift left) de 1 position des
éléments d'un tableau à une dimension d'entiers initialisé à sa déclaration. Le
tableau sera affiché avant et après le décalage. Le dernier élément du tableau
conserve sa valeur (variante: prend la valeur 0).
 */
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];

console.log('Tableau avant decalage : ' + tab);

for (i = 0, max = tab.length-1; i < max; i++){
    tab[i] = tab[i+1];
}

console.log('Tableau apres decalage : ' + tab);
*/

/**********VARIANTE************/
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];

console.log('Tableau avant decalage : ' + tab);

for (i = 0, max = tab.length-1; i < max; i++){
    tab[i] = tab[i+1];
}
tab[tab.length-1] = 0;
console.log('Tableau apres decalage : ' + tab);
*/

/*.
D2. Modifier l'algorithme de l'exercice précédent pour qu'il opère un décalage à gauche
de n positions (n étant un entier positif). La valeur de n sera lue au clavier et
supposée correcte.*/
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];
var decal = -1;

while (decal <0) {
    decal = parseInt(prompt('Entrez la valeur du décalage que vous voulez effectuer'));
}

console.log('Tableau avant decalage : ' + tab);

for (i = 0, max = tab.length; i < max; i++){
    tab[i] = tab[i+decal];
}
for ( i = 0; i < decal; i++){
    tab.pop();                              // ATTENTION PARENTHESE METHODE
}

console.log('Tableau apres decalage : ' + tab);
*/

/*D3. Écrire un algorithme qui opère un décalage à droite (shift right) de 1 position des
éléments d'un tableau à une dimension d'entiers initialisé à sa déclaration. Le
tableau sera affiché avant et après le décalage. Le premier élément du tableau
conserve sa valeur (variante: prend la valeur 0).
*/

var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];

console.log('Tableau avant decalage : ' + tab);
for(i = tab.length; i > 0; i--) {
    tab[i] = tab[i-1];
}
console.log('Tableau apres decalage : ' + tab);


/**********VARIANTE************/
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];

console.log('Tableau avant decalage : ' + tab);
for(i = tab.length; i > 0; i--) {
    tab[i] = tab[i-1];
}
tab[0] = 0;
console.log('Tableau apres decalage : ' + tab);
*/

/*
D4. Modifier l'algorithme de l'exercice précédent pour qu'il opère un décalage à droite
de n positions (n étant un entier positif). La valeur de n sera lue au clavier et
supposée correcte
 */
/*
var tab = [4, 8, 3, 16, 16, 5, 2, 12, 4, 3, 16, 14, 13, 2];
console.log('Avant decalage : ' + tab);
var decal = parseInt(prompt('Entrez la valeur du décalage à droite'));

for(i = tab.length-1; i >= 0; i--){
    tab[i] = tab[i-decal];
}

console.log('Apres decalage : ' + tab);

*/
/*
D5. Écrire un algorithme qui opère une rotation à gauche (rotate left) de 1 position des
éléments d'un tableau à une dimension d'entiers initialisé à sa déclaration. Le
tableau sera affiché avant et après la rotation.
*/

