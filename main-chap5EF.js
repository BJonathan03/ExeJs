// Chapitre 5 E et F
/*
S�rie E: recherche lin�aire
E1. (recherche lin�aire)�crire un algorithme qui recherche dans un tableau � une
dimension d'entiers la position d'une valeur enti�re lue au clavier. Le tableau sera
initialis� � sa d�claration et affich�. On supposera que les �l�ments du tableau ne
sont pas tri�s.
*/
/*
var tab = [7, 28, 3, -9, 47, -5, 19, 22, 45, -10, 64, 28, 77, 33, 69, -12];

var val = parseInt(prompt('Entrez un valeur � rechercher'));
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
E2. Un tableau � une dimension contient des entiers tri�s en ordre croissant. �crire un
algorithme qui recherche la position du premier �l�ment du tableau sup�rieur ou
�gal � une valeur enti�re lue au clavier. Si la valeur est sup�rieure au dernier
�l�ment du tableau, l'algorithme fournira comme valeur de la position, l'indice du
dernier �l�ment plus 1.
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
E3. Un tableau � une dimension contient des entiers tri�s en ordre croissant. �crire un
algorithme qui recherche la position du dernier �l�ment du tableau inf�rieur ou �gal
� une valeur enti�re lue au clavier. Si la valeur est inf�rieure au premier �l�ment du
tableau, l'algorithme fournira comme valeur de la position, l'indice du premier
�l�ment moins 1.
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
E4. Un tableau � une dimension contient des entiers tri�s en ordre croissant. �crire un
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
E5. (insertion) Soit t un tableau � une dimension d'entiers initialis� � sa d�claration. Il
contient N �l�ments mais seuls les N-1 �l�ments sont initialis�s. De plus, les
�l�ments sont rang�s en ordre croissant. Soit nbr un entier quelconque lu au
clavier. �crire un algorithme qui ins�re nbr dans le tableau t de mani�re � ce que
les �l�ments de celui-ci restent rang�s en ordre croissant. L'algorithme affichera le
tableau avant de lire la valeur du nombre � ins�rer. Il affichera le tableau apr�s
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
F1. (recherche dichotomique) Comme le E1 mais les �l�ments du tableau sont tri�s
en ordre croissant. (recherche lin�aire)�crire un algorithme qui recherche dans un tableau � une
dimension d'entiers la position d'une valeur enti�re lue au clavier. Le tableau sera
initialis� � sa d�claration et affich�. On supposera que les �l�ments du tableau ne
sont pas tri�s.
*/
/*
var tab = [7, 9, 13, 19, 27, 28, 29, 32, 35, 40, 44, 48, 57, 63, 69, 72];

var val = parseInt(prompt('Entrez un valeur � rechercher'));
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

