// Crear la clase punto (x e y como atibutos privados de tipo number)
export

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
    public distanciaAlOrigen():number //Devuelve la distancia del punto al origen de coordenadas (0,0)
    {
        return Math.sqrt(Math.pow(this.x, 2)+ Math.pow(this.y, 2));
    }

    public calcularDistancia (parametro: Point):number  //devuelve la distancia entre dos puntos
    {
        return Math.sqrt(Math.pow((this.x - parametro.x), 2) + (Math.pow((this.y - parametro.y), 2)));
    }

    public calcularCuadrante(): number
    {
        if (this.x == 0 || this.y == 0)
        {
            return 0;
        }

        else if (this.x > 0 && this.y > 0)
        {
            return 1;
        }

        else if (this.x < 0 && this.y > 0)
        {
            return 2;
        }

        else if (this.x <0  &&  this.y <0)
        {
            return 3;
        }

        else
        {
            return 4;
        }
    }

    public calcularMasCercano (parametro: Point[]): Point // devuelve una referencia al objeto del array más cercano al punto actual.
    {
        for (let i =0; i< parametro.length; i++)
        {
            if (this.calcularDistancia(parametro[i]) < this.calcularDistancia(parametro.length[i]))
            {
                return parametro[i];
            }

            else 
            {
                return parametro [i+1];
            }

        }
        //PLAN B
        let closestPoint: Point = new Point (0,0);
        for (let i =0; i< parametro.length; i++)
        {
            let arrDistancias: number [] = [];
            arrDistancias.push(this.calcularDistancia(parametro[i]));

            for (let j = 0; j<arrDistancias.length;j++)
            if ([j+1] < [j])
            {
            }

        }

    }
}


let miPunto = new Point (-1, 0);

let p1 = new Point (4,6);
let p2 = new Point (0, 4);
let p3 = new Point (5, 8);
let p4 = new Point (15, 38);
let p5 = new Point (0, 1);
let arraiPoints: Point [] = [p1, p2, p3];

console.log(miPunto.calcularMasCercano([p1, p5, p2, p3, p4]));
