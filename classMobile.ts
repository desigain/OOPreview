// Crear una case llamada Mobile
export 

class Mobile
{
    //Declaración de atributos o propiedades
    public name: string;
    public model: string;
    public trademark: string; 
    public sdSize: number;
    public color: string;
    public is5G: boolean;
    public cameraNumber: number;
    public price: number; 

    //Implementación del método constructor
    constructor (name:string, model: string, trademark: string, sdSize: number, color:string, is5G:boolean, cameraNumber: number, price: number)
    {
        this.name = name;
        this.model = model; 
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price; 
    }
}


