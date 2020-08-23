// Crear un fichero main que cree un objeto de tipo Punto, se le asignen 2 coordenadas y las imprima en la consola. 
import {Point} from "./point"

let miPunto = new Point (6, 13);
console.log(miPunto);

//Comprobando el resto de métodos de la clase Point
let otroPunto = new Point (45, 20);
console.log(miPunto.calcularDistancia(otroPunto));
console.log(miPunto.calcularDistancia(miPunto));
console.log(miPunto.distanciaAlOrigen());

let p3 = new Point (0,0);
console.log(p3.distanciaAlOrigen());
console.log(otroPunto.calcularCuadrante());
console.log(p3.calcularCuadrante()); 