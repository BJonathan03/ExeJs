//Chapitre 3 Exercices :

/* 3.1.1  Écrire un algorithme qui détermine si un nombre entier lu au
clavier est nul ou pas. L'algorithme affichera le message approprié
parmi les suivants: "Le nombre est nul", "Le nombre n'est pas nul".  */
/*
var nombre = parseInt(prompt('Entrez un nombre compris entre 0 et 100'));
if (nombre === 0) {
    console.log('Le nombre est nul')
} else if (nombre > 0) {
    console.log('Le nombre est non nul')
} else {
    console.log('On a dit positif...!!')
}
*/
/*
var nombre = parseInt(prompt('Entrez un nombre compris entre 0 et 100'));
switch (nombre) {
    case (nombre === 0) :
    console.log('Le nombre est non nul');
    break;
    case (nombre > 0) :
    console.log('Le nombre est non nul');
    break;
    default :
    console.log('On a dit positif!!');
}
/*
/* 3.1.2 Écrire un algorithme qui détermine si un nombre entier non nul
lu au clavier est positif ou négatif. L'algorithme affichera le message
approprié parmi les suivants: "Le nombre est positif", "Le nombre est
négatif". */

/*
var nombre = parseInt(prompt('Entrez un nombre'));

if (nombre < 0 ) {
    console.log('Le nombre est négatif');
} else if (nombre > 0) {
    console.log('Le nombre est positif');
} else {
    console.log('Le nombre est 0...');
}
*/

/* le if est préféré pour faire des conditons, le case est choisit en cas de plusieurs énumérations (pour éviter le si ou si ou si ou is...) */

/* 3.1.3 Écrire un algorithme qui détermine si un nombre entier non
négatif lu au clavier est pair ou impair. L'algorithme affichera le
message approprié parmi les suivants: "Le nombre est pair", "Le
nombre est impair". */
/*
var nombre = parseInt(prompt('Entrez le nombre de votre choix'));
var modulo = nombre%2;

if (modulo === 0) {
    console.log('votre nombre est pair');
} else {
    console.log('votre nombre est impair');
}
*/

/* 3.1.4 Écrire un algorithme qui détermine si un nombre entier lu au
clavier est égal à 30, 40 ou 50. L'algorithme affichera le message
approprié parmi les suivants: "Valeur correcte", "Valeur incorrecte". */
/*
var nombre = parseInt(prompt('Entrez un nombre'));
switch(nombre) {
    case 50:
    case 40:
    case 30:
        console.log('Valeur correcte');
        break;
    default :
        console.log('valeur incorrecte');
}
*/
/*Rappel : si on entre une lettre avec parseInt, il renvoie un nombre qui est NaN not a number
 * il est possible d'utiliser isNaN(variable) pour vérifier que c'est bien un nombre*/

/* 3.1.5 Écrire un algorithme qui détermine si un nombre entier
lu au clavier est nul, positif ou négatif. L'algorithme affichera
le message approprié parmi les suivants: "Nombre positif",
"Nombre négatif", "Nombre nul". */
/*
var nombre = parseInt(prompt('Entrez un nombre'));

if (isNaN(nombre)) {
    console.log('On a dit un nombre...');
} else if (nombre < 0) {
    console.log('Votre nombre est negatif');
} else if (nombre === 0) {
    console.log('Votre nombre vaut zero');
} else {
    console.log('Votre nombre est positif');
}
*/
/*
3.1.6 Écrire un algorithme qui recherche et affiche le
maximum parmi 5 nombres entiers lus au clavier. La
recherche du maximum se fera au fur et à mesure des
entrées successives. Il n'est donc pas question d'utiliser 5
données différentes pour mémoriser les valeurs des 5
nombres, l'algorithme n'utilisera pour ce faire qu'une seule
variable.
*/
/*
var nombre = parseInt(prompt('Entrez un nombre'));
var max = nombre;

for (i=1; i<=4; i++) {
    nombre = parseInt(prompt('Entrez un nombre'));
    if (nombre > max) {
        max = nombre;
    }
}
console.log(max);

*/
/*
3.1.7 Écrire un algorithme qui crypte un caractère lu au clavier d'après
la règle suivante :
? Chaque lettre est remplacée par sa suivante dans l'alphabet
? Z sera remplace‚ par A, z par a (une majuscule reste majuscule, une
minuscule reste minuscule)
? Chaque chiffre est remplacé par son suivant (9 sera remplacé par 0)
? Tout autre caractère sera remplacé par le caractère *
? L'algorithme affichera le caractère crypté
? Obtenir la valeur Unicode d'un caractère :

var str = 'pomme';
var code = str.charCodeAt(0); // premier caractère de la variable str

? Obtenir un caractère à partir d'une valeur Unicode :
var caractere = String.fromCharCode(code+1); // retourne 'q'

*/
/*
var caractere = prompt('entrez un caractere alphabetique ou numerique');
console.log(caractere);
var code = caractere.charCodeAt(0);

if (code >=48 && code < 57 || code >= 65 && code < 90 || code >= 97 && code < 122 ) {
    caractere = String.fromCharCode(code+1);
} else if ( code === 57) {
    caractere = String.fromCharCode(48);
} else if (code === 90) {
    caractere = String.fromCharCode(65);
} else if (code === 122) {
    caractere = String.fromCharCode(97);
} else {
    caractere = 'caractere non valide';  
}
console.log(caractere);
*/

/*
3.1.8 Écrire un algorithme qui calcule le montant d'une facture comportant une seule ligne de facture,
connaissant le prix unitaire de l'article et le nombre d'articles achetés. La TVA est uniformément de 21%.
Une remise sera calculée sur le montant HTVA d'après la règle suivante :
? 100 articles et plus: 10%
? 1000 articles et plus:
? 20% si le montant HTVA est d'au moins 1000€
? 15% sinon
L'algorithme affichera le nombre d'articles, le prix unitaire, le montant HTVA sans remise, la remise, le
montant HTVA avec remise, le taux de TVA, le montant de la TVA et le montant TVAC. Exemple :
        FACTURE.
Nombre d'articles :
Prix unitaire :
Montant HTVA avant remise :
Remise :
Montant HTVA avec remise :
TAUX TVA (21%) :
Montant TVA :
Montant TVAC :
*/
/*

var nbre_article = parseInt(prompt('Entrez le nombre d\'article'));
var prix_article = parseInt(prompt('Entrez le prix unitaire'));

var prix_tva = nbre_article * prix_article;
var tva = prix_tva *21/100;
var prix_htva = prix_tva - tva;
var remise = 0;
var prix_final = 0;

if (nbre_article < 100) {
    remise = 0;
}else if (nbre_article < 1000) {
    remise = prix_htva*10/100;
} else {
    if (prix_htva >= 1000) {
        remise = prix_htva*20/100;
    } else {
        remise = prix_htva*15/100;
    }
}
prix_final = prix_tva - remise;

console.log('Le nombre d\'article est de ' + nbre_article);
console.log('Le prix unitaire de l\'article est de ' + prix_article);
console.log('Le montant tvac sans remise est de ' + prix_tva);
console.log('Le montant htva est de ' + prix_htva);
console.log('Votre remise est de ' + remise);
console.log('Votre votre prix final (avec remise) est de ' + prix_final);

*/

/*3.1.9 Écrire un algorithme qui lit au clavier le millésime d'une
année et détermine si c'est une année bissextile.*/

/*
var annee = parseInt(prompt('Entrez une annee'));
var modulo1 = annee%4;
var modulo2 = annee%100;
var modulo3 = annee%400;

if(isNaN(annee)){
    console.log('Ce n\'est surement pas un bon cru vu qu\'elle n\'existe pas');
} else if ((modulo1 === 0 && modulo2 !== 0) ||  modulo3 === 0) {
    console.log('L\'annee est bissextile');
} else {
    console.log('L\'annee n\'est pas bissextile');
}

*/
/*
3.1.10 Écrire un algorithme qui calcule le prix d'une
consommation d'eau selon le tarif suivant :
? les 30 premiers m³ sont gratuits
? les volumes allant de 31 à 500 m³: 0,5€/m³
? les volumes allant de 501 à 1000 m³ : 0,4€/m³
? les volumes suivants : 0,25€/m³
? avec un forfait de 15€ et une TVA de 21%.
*/

var consommation  = parseInt(prompt('Entrez votre consommation d\'eau en metre cube'));
var prix_htva = 0;
var prix_tva = 0;
var forfait = 15;
var prix_total = 0;

if (consommation <= 30) {
    prix_htva = 0;
} else if (consommation <= 500) {
    prix_htva = (consommation - 30)*0.5;
} else if (consommation <= 1000) {
    prix_htva = (500 - 30)*0.5 + (consommation - 500)*0.4;
} else {
    prix_htva = (500 - 30)*0.5 + (1000 - 500)*0.4 + (consommation - 1000)*0.25;
}
prix_tva = prix_htva+prix_htva*21/100;
prix_total = prix_tva + forfait;

console.log('Votre consommation est de '+consommation+' metre cube et le montant htva et hors forfait est de '+prix_htva+' euros');
console.log('Le forfait est de '+forfait+' euros');
console.log('Le montant de votre facture TVA et forfait compris est de '+prix_total+' euros');
