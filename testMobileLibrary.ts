import {Mobile} from "./classMobile"
import {MobileLibrary} from "./classMobileLibrary"

// Crear 4 objetos de la clase mobile y un array que los contenga
let Nokia3210 = new Mobile("Nokia3210", "model3210", "Nokia Corporation", 5, "red", false, 1, 65.00);
let iPhone3G = new Mobile("Iphone", "Iplus3", "Apple", 128, "silver", true, 3, 899.00);
let SamsungGalaxy10 = new Mobile("Samsung", "Galaxy10", "SSG Corporation", 64, "black", true, 2, 450.99);
let Oneplus3T = new Mobile ("OnePlus 3T", "3T Plus", "Google", 64, "golden", true, 2, 488.99);

let misMoviles : Mobile [] = [Nokia3210, iPhone3G, SamsungGalaxy10, Oneplus3T]; 

// Crear un objeto de la clase MobileLibrary y asignarle el array creado anteriormente
let miTienda = new MobileLibrary("Outlet de Móviles", "Arturo Soria (Madrid)", misMoviles);

//Comprobar que todos los métodos del objeto MobileLibrary funcionan.
// - Comprobando getters y función totalPriceCalculation
console.log(miTienda.getLocation());
console.log(miTienda.getMobiles());
console.log(miTienda.getName());
console.log(miTienda.getTotalPrice());  // esto no muestra nada sin llamar a la función antes.
//console.log(miTienda.totalPriceCalculation());  dejo esta línea comentada porque da error cuando se convierte a privada. Aquí tiene sentido el getter.
console.log(miTienda.getTotalPrice());

// - Comprobando setters
miTienda.setLocation("c/ Bravo Murillo, 56 (Madrid)");
miTienda.setName("Casa Móvil");
miTienda.setTotalPrice(5.99); 

// creo una array de 2 móviles nuevos para probar setMobiles.
let Xiaomi = new Mobile("Xiaomi RedMi", "RedMi Note 4", "Xiaomi Corp", 128, "white", true, 2, 325.50);
let OppoReno = new Mobile("Oppo Reno", "RENO A9", "Oppo SL", 64, "blue", false, 3, 198.61);
let nuevosModelos: Mobile [] = [Xiaomi, OppoReno];
miTienda.setMobiles(nuevosModelos);

//Compruebo cambios de los setters
console.log(miTienda.getLocation());
console.log(miTienda.getName());
console.log(miTienda.getTotalPrice());  
console.log(miTienda.getMobiles());


console.log(miTienda.getTotalPrice());
