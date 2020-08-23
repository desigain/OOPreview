import {Mobile} from "./classMobile"

// Crear un objeto Nokia3210, otro iPhone3G y otro Samsung Galaxi 10.
let Nokia3210 = new Mobile("Nokia3210", "model3210", "Nokia Corporation", 5, "red", false, 1, 65);
let iPhone3G = new Mobile("Iphone", "Iplus3", "Apple", 128, "silver", true, 3, 850);
let SamsungGalaxy10 = new Mobile("Samsung", "Galaxy10", "SSG Corporation", 64, "black", true, 2, 450);

//Mostrar por consola todos los atributos de todos los objetos creados.
console.log(Nokia3210);
console.log(iPhone3G);
console.log(SamsungGalaxy10);
    
//Modificar el Nokia 3210 para que tenga 5G y 4 camaras
Nokia3210.is5G = true;
Nokia3210.cameraNumber = 4;

//Mostrar todos los atributos de todos los objetos creados
console.log(Nokia3210);  // se ven modificados los cambios
console.log(iPhone3G);
console.log(SamsungGalaxy10);