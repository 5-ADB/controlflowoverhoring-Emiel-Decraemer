/**
 * Je krijg 2 variabelen
 * Als de grond droog is, en er wordt geen regen voorspeld dan moet er in de
 * console verschijnen: sproeiers aan
 * In het andere geval moet er in de console verschijnen: sproeiers uit
 */

const grondIsDroog = true;
const geenRegenVoorspeld = true;

// if (grondIsDroog == true,  geenRegenVoorspeld == true) {
//     console.log("sproeiers aan");
    
// } else {
//     console.log("sproeiers uit");
    
// }

if (grondIsDroog == true) {
    if (geenRegenVoorspeld == true){
        console.log("sproeiers aan");
    }else {console.log("sproeiers uit");}
}else {console.log("sproeiers uit");
}