//Chapitre 3 Exercices :

/* 3.1.1  �crire un algorithme qui d�termine si un nombre entier lu au
clavier est nul ou pas. L'algorithme affichera le message appropri�
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
/* 3.1.2 �crire un algorithme qui d�termine si un nombre entier non nul
lu au clavier est positif ou n�gatif. L'algorithme affichera le message
appropri� parmi les suivants: "Le nombre est positif", "Le nombre est
n�gatif". */

/*
var nombre = parseInt(prompt('Entrez un nombre'));

if (nombre < 0 ) {
    console.log('Le nombre est n�gatif');
} else if (nombre > 0) {
    console.log('Le nombre est positif');
} else {
    console.log('Le nombre est 0...');
}
*/

/* le if est pr�f�r� pour faire des conditons, le case est choisit en cas de plusieurs �num�rations (pour �viter le si ou si ou si ou is...) */

/* 3.1.3 �crire un algorithme qui d�termine si un nombre entier non
n�gatif lu au clavier est pair ou impair. L'algorithme affichera le
message appropri� parmi les suivants: "Le nombre est pair", "Le
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

/* 3.1.4 �crire un algorithme qui d�termine si un nombre entier lu au
clavier est �gal � 30, 40 ou 50. L'algorithme affichera le message
appropri� parmi les suivants: "Valeur correcte", "Valeur incorrecte". */
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
 * il est possible d'utiliser isNaN(variable) pour v�rifier que c'est bien un nombre*/

/* 3.1.5 �crire un algorithme qui d�termine si un nombre entier
lu au clavier est nul, positif ou n�gatif. L'algorithme affichera
le message appropri� parmi les suivants: "Nombre positif",
"Nombre n�gatif", "Nombre nul". */
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
3.1.6 �crire un algorithme qui recherche et affiche le
maximum parmi 5 nombres entiers lus au clavier. La
recherche du maximum se fera au fur et � mesure des
entr�es successives. Il n'est donc pas question d'utiliser 5
donn�es diff�rentes pour m�moriser les valeurs des 5
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
3.1.7 �crire un algorithme qui crypte un caract�re lu au clavier d'apr�s
la r�gle suivante :
? Chaque lettre est remplac�e par sa suivante dans l'alphabet
? Z sera remplace� par A, z par a (une majuscule reste majuscule, une
minuscule reste minuscule)
? Chaque chiffre est remplac� par son suivant (9 sera remplac� par 0)
? Tout autre caract�re sera remplac� par le caract�re *
? L'algorithme affichera le caract�re crypt�
? Obtenir la valeur Unicode d'un caract�re :

var str = 'pomme';
var code = str.charCodeAt(0); // premier caract�re de la variable str

? Obtenir un caract�re � partir d'une valeur Unicode :
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
3.1.8 �crire un algorithme qui calcule le montant d'une facture comportant une seule ligne de facture,
connaissant le prix unitaire de l'article et le nombre d'articles achet�s. La TVA est uniform�ment de 21%.
Une remise sera calcul�e sur le montant HTVA d'apr�s la r�gle suivante :
? 100 articles et plus: 10%
? 1000 articles et plus:
? 20% si le montant HTVA est d'au moins 1000�
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

/*3.1.9 �crire un algorithme qui lit au clavier le mill�sime d'une
ann�e et d�termine si c'est une ann�e bissextile.*/

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
3.1.10 �crire un algorithme qui calcule le prix d'une
consommation d'eau selon le tarif suivant :
? les 30 premiers m� sont gratuits
? les volumes allant de 31 � 500 m�: 0,5�/m�
? les volumes allant de 501 � 1000 m� : 0,4�/m�
? les volumes suivants : 0,25�/m�
? avec un forfait de 15� et une TVA de 21%.
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
