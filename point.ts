// Crear la clase punto (x e y como atibutos privados de tipo number)
class Point

{
    //Declaración de atributos o propiedades
    private x: number;
    private y: number;

    //Implementación del método constructor 
    constructor (x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    //Métodos setters y getters para todos los atributos
    setX(x: number)
    {
        this.x = x;
    }

    getX(): number
    {
        return this.x;
    }

    setY(y: number)
    {
        this.y = y;
    }

    getY(): number
    {
        return this.y;
    }

    //Otros métodos públicos
    distanciaAlOrigen():number
    {

    }
}


// buscar comoo calcular distancia entre dos puntos
// 7 parametro tro objeto de la clase punto



// si alguna de las coordenadas del punto está sobre el eje oo en el mismo eje. Si x o y valen cero tiene que devolver cero
// devuelve 1 si x e y son positivos
//devuelve2 si x ne

// array de puntos: calcular la distancia con cada uno de los puntos.
// la distancia de ese punto con todos los puntos que le paso a través de un array
//averiguar cuál es la más corta  DEVUELVE UN OBJETO DE TIPO PUNTO
