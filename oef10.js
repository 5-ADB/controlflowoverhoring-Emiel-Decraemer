/**
 * een startgetal wordt telkens verhoogt met 2.
 * dit tot je aan het eindgetal komt.
 * in de console verschijnen telkens de bekomen nummers.
 * Na de lus geef je onderstaande zin in de console
 *
 * Het startgetal __ werd x aantal keer verhoogt met 2
 * x wordt vervangen door het aantal keer.
 *
 * Indien x een oneven getal is, dan moet er in de console ook nog verschijnen.
 *
 * het is in een oneven aantal keer gebeurt.
 *
 * Indien x een even gatal is, dan moet er in de console ook nog verschijnen.
 *
 * het is in een even aantal keer gebeurt.
 *
 */

let startgetal = 2;
const eindgetal = 12;
let aantalKeerDoorlopen = 0

do {
    aantalKeerDoorlopen++
    startgetal = startgetal+2
    console.log(startgetal);
} while (startgetal <= eindgetal);

console.log(`Het startgetal ${startgetal} werd ${aantalKeerDoorlopen} aantal keer verhoogt met 2`);
if (aantalKeerDoorlopen%2 == 0) {
    console.log("het is in een even aantal keer gebeurt.");
} else {
    console.log("het is in een oneven aantal keer gebeurt.");
}