// Chapitre 5 G
/*
G1. Soit t un tableau à une dimension d'entiers initialisé à sa déclaration. Écrire un
algorithme qui transfère les entiers positifs de t dans un tableau tp, et les entiers
négatifs dans un tableau tn. Les tableaux tp et tn seront affichés. L'algorithme
calculera également le nombre de zéros du tableau t. Le tableau t ne sera parcouru
qu'une seule fois. L'algorithme commencera par afficher le tableau t. 
*/
/*
var tab = [-4, 8, 19, -3, 78, -5, 0, 8, 0, 14, -13, -19, 0, -65, 8, -14, -10, 10, 0];
var tab_pos = [];
var tab_neg = [];
var cpt_zero = 0;

for (i = 0, max = tab.length; i < max; i++) {
    if (tab[i] < 0) {
        tab_neg.push(tab[i]);
    } else if (tab[i] > 0) {
        tab_pos.push(tab[i]);
    } else {
        cpt_zero++;
    }
}
console.log('Le tableau initiale est : ' +tab);
console.log('Le tableau des nombres negatifs est : ' +tab_neg);
console.log('Le tableau des nombres positifs est : ' +tab_pos);
console.log('Le nombre de zero dansd le tableau est ' +cpt_zero);
*/
/*
G2. Soit u un tableau à une dimension d'entiers initialisé à sa déclaration. Écrire un
algorithme qui transfère les éléments de u dans un tableau v suivant le principe
suivant : les éléments de rang impair de u sont rangés dans v en ordre inverse en
commençant par la fin de v, et les éléments de rang pair de u sont rangés dans v
dans le même ordre en commençant par le début de v. L'algorithme commencera
par afficher le tableau u. Exemple : u = [-1, 2, 7, 1, 3, 1, -2] et v = [2, 1, 1, -2, 3, 7,
-1]. Écrire au moins deux versions de l'algorithme, l'une parcourant le tableau deux
fois, l'autre ne le parcourant qu'une seule fois.
*/
/*
var tab = [-4, 8, 19, -3, 78, -5, 14, -13, -19, -65, -14, -10, 10, 0];
var tab1 = [];
var cpt_pair = 0;
var cpt_impair = tab.length-1;

for( i = 0, max = tab.length; i < max; i++) {   
    if (i%2 === 0) {
        tab1[cpt_pair] = tab[i];
        cpt_pair++;
    } else if (i%2 !== 0) {
        tab1[cpt_impair] = tab[i];
        cpt_impair--;
    }
}
console.log('Le tableau avant le tri est ' +tab);
console.log('Le tableau apres le tri est ' +tab1);
*/
/*
G2bis. Soit u un tableau à une dimension d'entiers initialisé à sa déclaration. Écrire un
algorithme qui transfère les éléments de u dans un tableau v suivant le principe
suivant : les éléments impair de u sont rangés dans v en ordre inverse en
commençant par la fin de v, et les éléments pair de u sont rangés dans v
dans le même ordre en commençant par le début de v. L'algorithme commencera
par afficher le tableau u. Exemple : u = [-1, 2, 7, 1, 3, 1, -2] et v = [2, 1, 1, -2, 3, 7,
-1]. Écrire au moins deux versions de l'algorithme, l'une parcourant le tableau deux
fois, l'autre ne le parcourant qu'une seule fois.
 */
/***************En un seul parcours ******************************/
/*
var tab = [-4, 8, 19, -3, 78, -5, 14, -13, -19, -65, -14, -10, 10, 0];
var tab1 = [];
var cpt_pair = 0;
var cpt_impair = tab.length-1;

for( i = 0, max = tab.length; i < max; i++) {   
    if (tab[i]%2 === 0) {
        tab1[cpt_pair] = tab[i];
        cpt_pair++;
    } else if (tab[i]%2 !== 0) {
        tab1[cpt_impair] = tab[i];
        cpt_impair--;
    }
}
console.log('Le tableau avant le tri est ' +tab);
console.log('Le tableau apres le tri est ' +tab1);
*/
/*
G3. Soit u un tableau à une dimension d'entiers non nuls. Soit v un tableau à une
dimension de même taille que u et dont les éléments sont 0 ou 1. La compression
de u par v est le tableau w à une dimension dont les éléments sont dans l'ordre
ceux du tableau u pour lesquels l'élément correspondant (de même indice) de v est
1. Exemple : u = [1, 2, 3, 4, 5, 6, 7] v = [0, 1, 1, 0, 1, 0, 1] w = [2, 3, 5, 7, 0, 0, 0]
Écrire un algorithme qui réalise une telle compression. Les tableaux u et v seront
initialisés à leur déclaration et affichés avant le tableau w.
*/
/*
var tab = [-4, 8, 19, -3, 78, -5, 14, -13, -19, -65, -14, -10, 10, 0];
var tab1 = [0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1];
var tab_comp = [];
var cpt_un = 0;
var cpt_z = 1;

for (i = 0, max = tab.length; i < max; i++) {
    if(tab1[i] === 1){
        tab_comp[cpt_un] = tab[i];
        cpt_un++;
    } else {
        tab_comp[max - cpt_z] = 0;
        cpt_z++;
    }
}

console.log('Le tableau avant compression : ' +tab);
console.log('Le tableau apres compression : ' +tab_comp);

*/
/*
G4. Soient u et v deux tableaux à une dimension d'entiers et de même taille. Écrire un
algorithme qui, à partir des deux tableaux u et v, construit les tableaux tMin et tMax
vérifiant la propriété suivante : quelle que soit la valeur de l'indice i, tMin[i] est le
minimum de u[i] et v[i], tMax[i] est le maximum de u[i] et v[i] De plus l'algorithme
calculera le nombre d'égalités (u[i] = v[i]). Les deux tableaux u et v seront initialisés
à leur déclaration et affichés avant les résultats.
*/
/*
var tab = [-4, 18, 19, -3, 78, -5, 14, -13, -19, -65, -14, -10, 10, 0];
var tab1 = [-14, 18, 9, -13, 88, 5, 24, 23, 9, -5, -24, -20, 10, 0];
var tab_min = [];
var tab_max = [];
var cpt = 0;

for(i = 0, max = tab.length; i < max; i++){
    if(tab[i] > tab1[i]){
        tab_min.push(tab1[i]);
        tab_max.push(tab[i]);
    } else {
        tab_min.push(tab[i]);
        tab_max.push(tab1[i]); 
        if (tab[i] === tab1[i]){
            cpt++;
        }
    }
}
console.log('Le tableau 1 est : ' +tab);
console.log('Le tableau 2 est : ' +tab1);
console.log('Le tableau des minimum est : ' +tab_min);
console.log('Le tableau des maximum est : ' +tab_max);
console.log('Le nombre d\'egalite entre les tableau est : ' +cpt);
*/

/*
G5. (fusion) Écrire un algorithme qui fusionne deux tableaux à une dimension d'entiers
triés en ordre croissant dans un troisième tableau à une dimension. Les deux
premiers tableaux seront initialisés à leur déclaration, n'auront pas nécessairement
la même taille et seront affichés.
 */

