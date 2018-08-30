// Chapitre 4
/*
1. Écrivez un algorithme affichant les dix premières valeurs de la table de
multiplication par 2
*/
/*
var cpt = 0;
var number = 2;

for(cpt = 0; cpt <=10; cpt++){
    console.log(cpt+' * '+number+" = "+ cpt*number);
}
*/

/*2. Écrivez un algorithme affichant les dix premières valeurs de la table de
multiplication de l'entier compris entre 2 et 20 choisi par l'utilisateur
*/
/*
var number = parseInt(prompt('Choisissez un nombre compris entre 2 et 20'));
var cpt = 0;

if(number>=2 && number<=20){
    for(cpt = 0; cpt<=10; cpt++){
        console.log(cpt+' * '+number+" = "+ cpt*number);
    }
} else {
    console.log('On a dit un nombre compris entre 2 et 20... S\'avez pas lire ou quoi?');
}
*/
/*
3. Écrivez un algorithme affichant la somme des nombres entiers positifs inférieurs à
1000 et divisibles par 3 ou 5
*/
/*
var total = 0;
var cpt = 0;
var mod3 = 0;
var mod5 = 0;

for (cpt = 0; cpt<=1000; cpt++){
    mod3 = cpt%3;
    mod5 = cpt%5;
    if(mod3 === 0 || mod5 === 0){
        total += cpt;
    }
}
console.log('la somme des nombres iferieur a 1000 et divisible par 3 ou par 5 est '+total);
*/

/*
4. Écrivez un algorithme qui calcule et affiche la somme des dix premières valeurs de
la table de multiplication par 2
 */
/*
var number = 2;
var cpt = 0;
var somme = 0;

for (cpt = 0; cpt<=10; cpt++){
    somme = somme + cpt*number;
    console.log(somme);
}
*/
/*
5. Écrivez un algorithme qui calcule et affiche la somme des dix premières valeurs de
la table de multiplication de l'entier positif choisi par l'utilisateur (<=100)
*/
/*
var number = parseInt(prompt('Entrez un nombre entier compris entre 0 et 100'));
var cpt = 0;
var somme = 0;

if(number <= 100 && number >=0 ){
    for (cpt =0; cpt<=10; cpt++){
        somme = somme + cpt*number;
    }
} else {
    console.log('Vous savez pas lire? entre 0 et 100!!');
    somme = 'error';
}
console.log('la somme est de '+somme);
*/

/*
6. Écrivez un algorithme qui calcule et affiche la somme des nombres pairs et la
somme des nombres impairs compris entre une valeur minimale et une valeur
maximale saisies par l'utilisateur (Ex :entre 50 et 90)
*/
/*
var number1 ;
var number2;
var sommep = 0;
var sommeimp = 0;
var cpt = 0;
var mod = 0;

do {
    number1 = parseInt(prompt('Entrez votre borne inferieure'));
    number2 = parseInt(prompt('Entrez votre borne superieure'));
}while(number1 >= number2);

for(cpt = number1; cpt <= number2; cpt++){
    mod = cpt%2;
    if(mod === 0){
        sommep = sommep + cpt;
    }else{
        sommeimp = sommeimp + cpt;
    }
}

console.log('la somme des nombres paires est de ' +sommep);
console.log('la somme des nombres impaires est de ' +sommeimp);
*/
/*
7. Écrivez un algorithme qui calcule et affiche les sommes des multiples de 3, de 5, de
7 et de 11 compris entre une valeur minimale et une valeur maximale saisies par
l'utilisateur (Ex :entre 50 et 90)
*/
/*
var number1;
var number2;
var cpt = 0;
var mod3 = 0;
var mod5 = 0;
var mod7 = 0;
var mod11 = 0;
var somme = 0;

do{
    number1 = parseInt(prompt('Entrez votre borne inferieure'));
    number2 = parseInt(prompt('Entrez votre borne superieure'));
}while(number1 >= number2);

for(cpt = number1; cpt <= number2; cpt++){
    mod3 = cpt%3;
    mod5 = cpt%5;
    mod7 = cpt%7;
    mod11 = cpt%11;
    if(mod3 === 0 || mod5 === 0 || mod7 === 0 || mod11 === 0){
        somme = somme + cpt;
    }
}

console.log('la somme des valeurs est ' +somme);
*/
/*
8. Écrivez un algorithme qui affiche les dix premières puissances (à partir de 0) de
l'entier positif choisi par l'utilisateur (<=100)
*/
/*
var number = parseInt(prompt('Entrez un nombre'));
var cpt = 0;
var max = 10;

for (cpt = 0; cpt <= max; cpt++){
    console.log(number+'^'+cpt+' = '+ Math.pow(number, cpt));
}

*/   //ou Bien, sans la fonction Math.pow

/*
var number = parseInt(prompt('Entrez un nombre'));
var cpt1 = 0;
var cpt2 = 0;
var max = 10;
var reponse = 1;


for (cpt1 = 0; cpt1 <= max; cpt1++){
    for (cpt2 = 1; cpt2 <=cpt1; cpt2++){
        reponse = reponse*number;
    }
    console.log(number+'^'+cpt1+' = '+reponse);
    reponse = 1;
}
*/
/*
9. Faites deviner une lettre de l'alphabet :
• L'opérateur a le droit de l'encoder en minuscule ou en majuscule
• Si la lettre encodée suit la lettre à trouver dans l'alphabet, on affiche « trop loin »
• Si la lettre encodée précède la lettre à trouver dans l'alphabet, on affiche « pas
assez loin »
• Sinon, on affiche « le caractère à trouver était bien caractere et on sort du
programme
*/
/*
var lettre;
var reponse = 'p';
var code = reponse.charCodeAt(0);
var code2;

while (code !== code2){
    lettre = prompt('entrez une lettre');
    code2 = lettre.toLowerCase().charCodeAt(0);     //!!!!!!!!!!!
    //code2 = lettre.charCodeAt(0); 
    if(code < code2){
        console.log('Plus haut dans l\'alphabet');     
        console.log(lettre);
    }else if (code > code2) {
        console.log('Plus bas dans l\'alphabet');
        console.log(lettre);
    }else {
        console.log("Victory");
    }
}

*/
/*
10.Afficher les 15 premiers termes de la suite de Fibonacci :
• valeurn+2 = valeurn+1 + valeurn
• Avec valeur1 = 0 et valeur2 = 1
*/
/*
var number1 = 0;
var number2 = 1;
var somme = 0;
var cpt = 0;

for(cpt = 0; cpt < 15; cpt++){
    somme = number1 + number2;
    console.log(somme);
    number1 = number2;
    number2 = somme;
}
*/
/*
11. Affichez un triangle rectangle formé du caractère *
• Demandez la hauteur du triangle
• Exemple pour une hauteur de 5 :
*/
/*
var hauteur = parseInt(prompt('Entrez la hauteur du triangle'));
var message = '';
var cpt;
var cpt2;

for (cpt = 1; cpt <= hauteur; cpt++){
    message = '';
    for(cpt2 = 1; cpt2<= cpt; cpt2++){
        message += '*';
    }
    console.log(message);
}
*/
/*
12.Affichez un carré formé du caractère *
• Demandez la hauteur du carré
• Exemple pour une hauteur de 5
 */
/*
var hauteur = parseInt(prompt('Entrez la hauteur du carre'));
var message = '';
var cpt;
var cpt2;

for(cpt = 1; cpt <= hauteur; cpt++ ){
    message = '';
    for(cpt2 = 1; cpt2<= hauteur; cpt2++){
        message += '*';
    }
    console.log(message);
}
*/

/*
13.Affichez un triangle isocèle formé du caractère *
• Demandez la hauteur du triangle
• Exemple pour une hauteur de 4 :
 */









/*
1. Écrire un algorithme qui recherche le maximum d'une série de nombres entiers
lus au clavier et compris entre 0 et 20. L'effectif de la série sera introduit avant
les nombres de la série et sera supposé strictement positif. L'algorithme
n'effectuera aucun contrôle de validité.
*/
/*
var effectif = parseInt(prompt('Entrez l\'effectif de la serie'));
var max = -1;
var number;
var cpt;

for(cpt = 1; cpt <= effectif; cpt++){
    number = parseInt(prompt('Entrez la valeur '+ cpt+' à tester'));
    if (number > max) {
        max = number;
    }
}
console.log('Le maximum est : ' +max);
*/

/*
2. Modifier l'algorithme de l'exercice 1 pour qu'il recherche à la fois le maximum et
le minimum de la série.
*/
/*
var effectif = parseInt(prompt('Entrez l\'effectif de la serie'));
var min = 999999;
var number;
var cpt;

for(cpt = 1; cpt <= effectif; cpt++){
    number = parseInt(prompt('Entrez la valeur '+ cpt+' à tester'));
    if (number < min) {
        min = number;
    }
}
console.log('Le minimum est : ' +min);
*/