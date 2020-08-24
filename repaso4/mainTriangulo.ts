import {Triangulo} from "./triangulo";
import {Point} from "./point";

// Probando método clase Triangulo
let v1 = new Point (4,6);
let v2 = new Point (5,0);
let v3 = new Point (2, 7);
let triangulo = new Triangulo(v1, v2, v3);

console.log(triangulo.calcularLongitudLados());

