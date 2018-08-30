//Chapitre 2 Exercices :
/*
2.2.1 Calculez le périmètre et l'aire d'un carré l'utilisateur donnant la valeur du
côté
*/
/*
var cote = parseInt(prompt('Entrez la valeur du cote de votre carre en metre'));
var perimetre;
var aire;
if (isNaN(cote)) {
    console.log('Ce n\'est pas une valeur numérique...!!');
} else {
    perimetre = 4*cote;
    aire = cote*cote;
}

console.log('Votre carre a un perimetre de '+perimetre+' metre et une surface de '+aire+' metre carre');
*/


 /*
2.2.2 Calculez le périmètre et l'aire d'un rectangle l'utilisateur donnant la valeur
de la longueur et de la largeur 
*/
/*
var long = parseInt(prompt('Entrez la longueur de votre rectangle en metre'));
var larg = parseInt(prompt('Entrez la largeur de votre rectangle en metre'));
var perimetre;
var aire;
if (isNaN(long) || isNaN(larg)) {
    console.log('il faut des valeurs numériques...!!');
} else {
    perimetre = larg*2+long*2;
    aire = larg*long;
}

console.log('Votre carre a un perimetre de '+perimetre+' metre et une surface de '+aire+' metre carre');
*/

/*
2.2.3 Écrire un script qui établit une facture comportant une seule ligne (un seul
produit en un nombre quelconque d'exemplaires). L'utilisateur précisera le prix
unitaire, le nombre d'exemplaires, et le taux de TVA (en %). Une remise de
10% est accordée systématiquement (sur le prix HTVA). Le script affichera le
montant HTVA, le montant de la TVA et le prix TVAC.
 */
/*
var nbre_article = parseInt(prompt('Entrez le nombre d\'article'));
var prix_article = parseInt(prompt('Entrez le prix unitaire de l\'article'));
var tva = parseInt(prompt('Entrez la tva en %'));
var prc_remise = 0.1;

var prix_tva = nbre_article*prix_article;
var montant_tva = prix_tva*tva/100
var prix_htva = prix_tva - montant_tva;
var remise = prix_htva*prc_remise;
var prix_final = prix_tva-remise;

console.log('prix htva : '+prix_htva);
console.log('remise : '+remise);
console.log('montant de la tva : '+montant_tva);
console.log('montant du : '+prix_final);
*/
/*
2.2.4 Écrire un script qui calcule le nombre de billets ou de pièces de 1, 2, 5,
10, 20, 50, 100, 200, 500 euros nécessaires pour former un montant donné. Il
calculera le nombre minimal de coupures pour former le montant donné par
l'utilisateur
*/

