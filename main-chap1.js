/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//alert("première ligne /n deuxième ligne");
//console.log("Hello /n World");

//var varTest1 = 10;
//var test2;
//console.log (varTest1);
//console.log(test2);

//console.log("klmnopfjkdf");
/*
 var varEntier = 1;
 var varReel = 2.0;     
 var varBool = true;
 console.log(typeof varEntier);  //pas de distinction entre entier et réel en js
 console.log(typeof varReel);
 console.log(typeof varBool);
 
 var varCaractere = 'a';
 var varstring = 'abc';
 var varundifined;
 console.log (typeof varCaractere);
 console.log (typeof varstring); //pas de distinction entre un caractère et une chaine de caractère
 console.log (typeof varundifined);
 */

/*
 * var n1 = 3;
 * var n2 = 2 ;
 * console.log("Valeur de n1 et n2 = " +n1 +n2);  affiche Valeur de n1 et n2 = 32   
 * console.log("Valeur de n1 + n2" +(n1 +n2));  affiche Valeur de n1 + n2 = 5
 */
/*
 var nomUtilisateur = prompt("Quel est votre nom ? ");  //Prompt permet de demander à l'utilisateur de rentrer une donnée qui serra stockée dans la variable
 console.log('Bonjour ' + nomUtilisateur);
 */
/*
 var nombre1 = prompt("Entrez le nombre 1");  
 var nombre2 = prompt("Entrez le nombre 2");
 console.log("La somme de vos nombre est " (nombre1+nombre2));  // Ne marche pas car prompt retourne une chaine de caractère et non un nombre
 */
//parseInt : pour convertir en un entier
//parseFloat : pour convertir en un réel
/*
 var nombre1 = prompt("Entrez le nombre 1"); 
 var nombre2 = prompt("Entrez le nombre 2");
 nombre1 = parseInt(nombre1);
 nombre2 = parseInt(nombre2);
 console.log("La somme de vos nombre est " + (nombre1 + nombre2));
 */
/*
 var nombre1 = parseInt(prompt("Entrez le nombre 1")); 
 var nombre2 = parseInt(prompt("Entrez le nombre 2"));
 console.log("La somme de vos nombre est " + (nombre1 + nombre2));
 */
/*
 var nombre1 = prompt("Entrez le nombre 1"); 
 var nombre2 = prompt("Entrez le nombre 2");
 console.log("La somme de vos nombre est " + (parseInt(nombre1) + parseInt(nombre2)));
 */
/*
 var nombre1 = prompt("Entrez le nombre 1"); 
 var nombre2 = prompt("Entrez le nombre 2");
 console.log("La somme de vos nombre est " + nombre1 +" + " + nombre2 +" = " + (parseInt(nombre1) + parseInt(nombre2))); //Attention le plus avant les chaines de caractères également
 */
/*
 var cote = parseInt(prompt("Entrez la longueur du coté"));   !!erreur code!!
 var largeur = 4*cote;
 var aire = cote*cote;
 console.log("Le périmètre du carré est de " + largeur + );
 */
/*
 var result_compar;
 result_compar = 3 > 4;
 console.log(result_compar + ' ' + typeof result_compar);
 
 var result_compar;
 result_compar = 3 < 4;
 console.log(result_compar + ' ' + typeof result_compar);
 */
/*
 var val1 = 2;
 var val2 = '2';
 
 var result_compar;
 
 result_compar = (val1 == val2);
 console.log(result_compar + ' ' + typeof result_compar);
 
 result_compar = (val1 === val2);
 console.log(result_compar + ' ' + typeof result_compar);
 */
/*
 var val1 = 3;
 var val2 = 4;
 
 if (val1 === val2) {
 console.log (val1 === val2)
 }
 */
/*
 * Operateur ternaire : condition en une ligne : condition(s) ? instruction(s) 1 : instruction(s) 2
 *                                                  si condition alors instruct°1 sionon condition 2
 *
 *switch (variable) {
 *  case valeur 1 : 
 *      instructions 1
 *      break;
 *  case valeur 2 :
 *      instruction 2
 *      break;
 *      ...
 *}
 *break permet de sortir du switch
 */
/*
 var str = 'pomme';
 var code = str.charCodeAt(0); //premier caractère de la variable str
 
 
 var caractere = String.fromCharCode(code +1); //retourne q
 console.log (caractere);
 */

//Chapitre 3 Exercices :
/* 3.1.1
 var nombre = parseInt(prompt("Entrez un nombre"));
 if (nombre === 0) {
 console.log("Le nombre est nul");
 }
 else {
 console.log("Le nombre n'est pas nul");
 }
 */
/* 3.1.2
 var nombre = parseInt(prompt("Entrez un nombre non nul"));
 
 if (nombre > 0) {
 console.log("Le nombre est positif");
 }
 else {
 if (nombre < 0) {
 console.log("Le nombre est négatif");
 }
 else {
 console.log("On a dit non nul!!")
 }
 }
 */
/* 3.1.3
 var nombre = parseInt(prompt("Entrez un nombre positif non nul"));
 var reste = nombre % 2;
 if (nombre > 0) {
 if (reste == 0){
 console.log("Le nombre est pair");
 }
 else {
 console.log("Le nombre est impair");
 }
 }
 else {
 if (nombre == 0 ) {
 console.log("On a dit non nul");
 }
 else {
 console.log("On a dit positif");
 }
 }
 */
/* 3.1.4
 var nombre = parseInt(prompt("Entrez un nombre"));
 if (nombre ==50 || nombre ==40 || nombre ==30){
 console.log("Valeur correte");
 }
 else {
 console.log("valeur incorrecte");
 }
 */
/*  3.1.6
 var nombre = parseInt(prompt("Entrez un nombre"));
 var max = nombre;
 for (i=1; i<=4; i++){
    var nombre = parseInt(prompt("Entrez un nombre"));
    if (max < nombre){
    max = nombre;
    }    
 }
 console.log(max);
 */
/*
 var nombre = parseInt(prompt("Entrez un nombre"));
 var max = nombre;
 var nombre = parseInt(prompt("Entrez un nombre"));
 if (max < nombre){
 max = nombre;   
 }
 var nombre = parseInt(prompt("Entrez un nombre"));
 if (max < nombre){
 max = nombre;   
 }
 var nombre = parseInt(prompt("Entrez un nombre"));
 if (max < nombre){
 max = nombre;   
 }
 var nombre = parseInt(prompt("Entrez un nombre"));
 if (max < nombre){
 max = nombre;   
 }
 console.log(max);
*/
/*
var caractere = prompt("Entrez un caractère");
var code = caractere.charCodeAt(0);
//console.log(caractere);
//console.log(code + 1);
//caractere = String.fromCharCode(code+1);
//console.log(caractere);

if (caractere >= 'a' && caractere <= 'y') {
    console.log(caractere + ' est une minuscule');
    console.log(caractere + ' est une minuscule');
    caractere = String.fromCharCode(code+1);
    console.log(caractere);
}
else {
    if (caractere == 'z') {
        caractere = 'a';
        console.log(caractere);
    }
    else { 
        if (caractere >= 'A' && caractere <= 'Y') {
            console.log(caractere + ' est une majuscule');
            caractere = String.fromCharCode(code+1);
            console.log(caractere);
        }
        else { 
            if(caractere == 'Z') {
                console.log(caractere + ' est une majuscule');
                caractere = 'A';
                console.log(caractere);
            }
            else {
                if (caractere >= '0' && caractere <= '8') {
                    console.log(caractere + ' est un nombre');
                    caractere = String.fromCharCode(code+1);
                    console.log(caractere); 
                }
                else {
                    if(caractere == '9'){
                        console.log(caractere + ' est un nombre');
                        caractere = 0;
                        console.log(caractere);
                    }
                    else {
                        caractere = '*'
                        console.log(caractere);
                    }
                }
            }
        }
    }
}
*/
/*
var prix_u = parseInt(promt ("Entrez le prix unitaire"));
var qtite = parseInt(prompt("Entrez le nombre d'article"));
var tva = 21;
var promo1 = 10;
var promo2 = 15;
var promo3 = 20;
var montant_htva = qtite*prix_u 

if (qtite > 1000 && montant_htva > 1000){
    
} 
*/
/*
var initiale = 5;
var resultat;

//pre-incrémentation

resultat = ++initiale;  //On augmente initiale de 1 et puis on égale resultat à initiale
console.log("initiale = " + initiale);
console.log("resultat = " + resultat);//resultat est à 6 car pre-incrémentation

//post-incrémentation

var initiale = 5;
resultat = initiale++;  //on égale resultat à initiale puis on augmente initiale de 1
console.log("initiale = " + initiale);
console.log("resultat = " + resultat); //resultat est à 5 car post-incrémentation
*/


//BOUCLES

//Continue : permet de "reposer la question de la boucle ==> itération suivante
//Break : permet de sortir de la boucle
//posibilité de sortir de plusieurs boucles avec un abel (break avc label mais à utiliser avec partimonie)