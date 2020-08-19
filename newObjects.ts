// En otro fichero hacer las mmismas operaciones que se hicieron en el punto 2:
// 2.1 - Crear un objeto de la clase Mobile llamado Nokia3210, iPhone3G y Samsung Galaxy 10

import { Mobile } from "./classMobile";

let Nokia3210 = new Mobile("Nokia3210", "model3210", "Nokia Corporation", 5, "red", false, 1, 65.00);
let iPhone3G = new Mobile("Iphone", "Iplus3", "Apple", 128, "silver", true, 3, 899.00);
let SamsungGalaxy10 = new Mobile("Samsung", "Galaxy10", "SSG Corporation", 64, "black", true, 2, 450.99);

// 2.2 - Mostrar por consola todos los atributos de cada objeto
console.log(Nokia3210);
console.log(iPhone3G);
console.log(SamsungGalaxy10);

//B) Usando el método print creado, que es público y  muestra todo en formato lista
Nokia3210.printProperities();  
iPhone3G.printProperities();
SamsungGalaxy10.printProperities();

//C) opcion mega pro de developer que crea getters y luego, además, LOS USA para mostrar atributos ahora privados uno a uno
console.log(Nokia3210.getName());
console.log(Nokia3210.getModel());
console.log(Nokia3210.getTrademark());
console.log(Nokia3210.getSdSize());
console.log(Nokia3210.getColor());
console.log(Nokia3210.getIs5G());
console.log(Nokia3210.getCameraNumber());
console.log(Nokia3210.getPrice());

// 2.3 - Modificar el Nokia3210 para que tenga 5G y 4 camaras
Nokia3210.setIs5G(true);
Nokia3210.setCameraNumber(4);
Nokia3210.printProperities(); // para comprobar que los valores cambian

// 2.4 - Mostrar todos los atributos de todos los objetos creados
//Be getter my friend: 

console.log(iPhone3G.getName());
console.log(iPhone3G.getModel());
console.log(iPhone3G.getTrademark());
console.log(iPhone3G.getSdSize());
console.log(iPhone3G.getColor());
console.log(iPhone3G.getIs5G());
console.log(iPhone3G.getCameraNumber());
console.log(iPhone3G.getPrice());


console.log(SamsungGalaxy10.getName());
console.log(SamsungGalaxy10.getModel());
console.log(SamsungGalaxy10.getTrademark());
console.log(SamsungGalaxy10.getSdSize());
console.log(SamsungGalaxy10.getColor());
console.log(SamsungGalaxy10.getIs5G());
console.log(SamsungGalaxy10.getCameraNumber());
console.log(SamsungGalaxy10.getPrice());

// Crear un array de objetos de la clase Mobile con los tres objetos ya creados. 
let miLocutorio = new Array();
miLocutorio = [Nokia3210, iPhone3G, SamsungGalaxy10];

// Mostrar cada uno de los atributos de cada unos de los objetos del array creado en modo lista.
for (let i=0; i <miLocutorio.length; i++)
{
    miLocutorio[i].printProperities();
}
