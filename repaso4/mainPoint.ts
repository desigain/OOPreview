// Crear un fichero main que cree un objeto de tipo Punto, se le asignen 2 coordenadas y las imprima en la consola. 
import {Point} from "./point"

let miPunto = new Point (6, 13);
console.log(miPunto);

//Comprobando el resto de métodos de la clase Point
let otroPunto = new Point (45, 20);
console.log(miPunto.calcularDistancia(otroPunto));
console.log(miPunto.calcularDistancia(miPunto));
console.log(miPunto.distanciaAlOrigen());

let point3 = new Point (0,0);
console.log(point3.distanciaAlOrigen());
console.log(otroPunto.calcularCuadrante());
console.log(point3.calcularCuadrante()); 


//Probando método calculrMasCercano
let miNuevoPunto = new Point (-1, 0);
let p1 = new Point (4,6);
let p2 = new Point (0, 4);
let p3 = new Point (5, 8);
let p4 = new Point (15, 38);
let p5 = new Point (0, 1);
let arraiPoints: Point [] = [p1, p2, p3];

console.log(miPunto.calcularMasCercano([p1, p5, p2, p3, p4]));
