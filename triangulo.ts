// Crea la clase Triángulo cuyo único constructor reciba tres bjetos de la clase Punto que son sus vértices. 

import {Point} from "./point";

export 
class Triangulo 
{
    //Declaración de atributos o propiedades
    private vertice1: Point;
    private vertice2: Point;
    private vertice3: Point; 

    //Implementación del método constructor
    constructor (vertice1: Point, vertice2: Point, vertice3: Point)
    {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3; 
    }

    //Otros métodos
    public calcularLongitudLados(): number[] // devuelve un array de tres posiciones, cada una es la longitud de un lado del triángulo
    {
        let resultado: number[] = [];
        resultado.push(this.vertice1.calcularDistancia(this.vertice2), this.vertice2.calcularDistancia(this.vertice3), this.vertice3.calcularDistancia(this.vertice1));
        return resultado;
    }
   
}
