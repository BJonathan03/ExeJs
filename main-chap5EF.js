// Chapitre 5 E et F
/*
Série E: recherche linéaire
E1. (recherche linéaire)Écrire un algorithme qui recherche dans un tableau à une
dimension d'entiers la position d'une valeur entière lue au clavier. Le tableau sera
initialisé à sa déclaration et affiché. On supposera que les éléments du tableau ne
sont pas triés.
*/
/*
var tab = [7, 28, 3, -9, 47, -5, 19, 22, 45, -10, 64, 28, 77, 33, 69, -12];

var val = parseInt(prompt('Entrez un valeur à rechercher'));
var position = [];
var index = [];

for (i = 0, max = tab.length; i < max; i++){
    if (tab[i] === val) {
        index.push(i);
        position.push(i+1);
    }
}

console.log('Le tableau est : ' +tab);
console.log('La valeur ' + val + ' se trouve en position : ' +position);
console.log('La valeur ' + val + ' se trouve a l\'index : ' +index);
*/

/*
E2. Un tableau à une dimension contient des entiers triés en ordre croissant. Écrire un
algorithme qui recherche la position du premier élément du tableau supérieur ou
égal à une valeur entière lue au clavier. Si la valeur est supérieure au dernier
élément du tableau, l'algorithme fournira comme valeur de la position, l'indice du
dernier élément plus 1.
 */
/*
var tab = [2, 8, 15, 19, 23, 35, 39, 42, 48, 49, 52, 58, 60];

var val = parseInt(prompt('Entrez la valeur a tester'));
var position = 0;
var index = 0;
var value = 0;

for (i = 0, max = tab.length; i < max; i++) {
    if(val <= tab[i]) {
        index = i;
        position = i+1;
        value = tab[i];
        i = 300;   
        console.log('Le tableau est :' +tab);
        console.log('La valeur superieure la plus proche dans le tableau est ' + value + ' et se trouve en position ' + position + ' a l\'index ' + index);
    } else if (i === max-1) {
        index = i+1;
        value = 'La valeur maximale du tableau est ' +tab[i];
        console.log('L\'index est de ' + index + ' Desole : ' + value);
    }
}
*/

/*
E3. Un tableau à une dimension contient des entiers triés en ordre croissant. Écrire un
algorithme qui recherche la position du dernier élément du tableau inférieur ou égal
à une valeur entière lue au clavier. Si la valeur est inférieure au premier élément du
tableau, l'algorithme fournira comme valeur de la position, l'indice du premier
élément moins 1.
 */
/*
var tab = [2, 8, 15, 19, 23, 35, 39, 42, 48, 49, 52, 58, 60];

var val = parseInt(prompt('Entrez la valeur a tester'));
var position = 0;
var index = 0;
var value = 0;

for (i = 0, max = tab.length; i < max; i++) {
    if(val > tab[i]){
        index = i;
        position = i+1;
        value = tab[i];
    } else if ( i === 0 ) {
        index = i-1;
        position = i;
        value = 'unfifined';
    }
}

console.log('Le tableau est : ' + tab);
console.log('La valeur inferieure la plus proche dans le tableau est ' + value + ' et se trouve en position ' + position + ' a l\'index ' + index);

*/

/*
E4. Un tableau à une dimension contient des entiers triés en ordre croissant. Écrire un
algorithme qui calcule le nombre d'entiers du tableau strictement compris entre
deux valeurs lues au clavier.
 */
/*
var tab = [2, 8, 15, 19, 23, 35, 39, 42, 48, 49, 52, 58, 60];

var inf = parseInt(prompt('Entrez la borne inferieure'));
var sup = parseInt(prompt('Entrez la borne superieure'));
var cpt = 0;

for(i = 0, max = tab.length; i < max; i++){
    if (tab[i] > inf && tab[i] < sup) {
        cpt++;
    }
}

console.log('Le tableau est :' +tab);
console.log('Le nombre d\'entier compris entre ' +inf +' et ' +sup +' est de : ' +cpt);

*/

/*
E5. (insertion) Soit t un tableau à une dimension d'entiers initialisé à sa déclaration. Il
contient N éléments mais seuls les N-1 éléments sont initialisés. De plus, les
éléments sont rangés en ordre croissant. Soit nbr un entier quelconque lu au
clavier. Écrire un algorithme qui insère nbr dans le tableau t de manière à ce que
les éléments de celui-ci restent rangés en ordre croissant. L'algorithme affichera le
tableau avant de lire la valeur du nombre à insérer. Il affichera le tableau après
l'insertion. Exemple : t = [1, 3, 4, 7, 9, 10] et nbr = 5 t = [1, ? 3, 4, 5, 7, 9, 10]
 */
/*
var tab = [2, 9, 12, 14, 19, 21, 26, 30, 33, 35, 39];

var val = parseInt(prompt('Entrez la valeur a inserer'));
console.log('tableau avant insertion de la valeur : ' + tab);
tab.push(val);
tab.sort();
console.log('tableau apres insertion de la valeur : ' + tab);
*/
/*
F1. (recherche dichotomique) Comme le E1 mais les éléments du tableau sont triés
en ordre croissant. (recherche linéaire)Écrire un algorithme qui recherche dans un tableau à une
dimension d'entiers la position d'une valeur entière lue au clavier. Le tableau sera
initialisé à sa déclaration et affiché. On supposera que les éléments du tableau ne
sont pas triés.
*/
/*
var tab = [7, 9, 13, 19, 27, 28, 29, 32, 35, 40, 44, 48, 57, 63, 69, 72];

var val = parseInt(prompt('Entrez un valeur à rechercher'));
var position = [];
var index = [];

for (i = 0, max = tab.length; i < max; i++){
    if (tab[i] === val) {
        index = i;
        position = i+1;
        i = max;
    }
}

console.log('Le tableau est : ' +tab);
console.log('La valeur ' + val + ' se trouve en position : ' +position);
console.log('La valeur ' + val + ' se trouve a l\'index : ' +index);
*/

