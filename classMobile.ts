// Crear una case llamada Mobile
export 

class Mobile
{
    //Declaración de atributos o propiedades
    private name: string;
    private model: string;
    private trademark: string; 
    private sdSize: number;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number; 

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

    //Métodos setters y getters
    setName(name: string) 
    {
        this.name = name;
    }

    getName():string 
    {
        return this.name;
    }

    setModel(model: string) 
    {
        this.model = model;
    }

    getModel():string 
    {
        return this.model;
    }

    setTrademark(trademark: string) 
    {
        this.trademark = name;
    }

    getTrademark():string 
    {
        return this.trademark;
    }

    setSdSize(sdSize: number) 
    {
        this.sdSize = sdSize;
    }

    getSdSize():number 
    {
        return this.sdSize;
    }

    setColor(color: string) 
    {
        this.color = color;
    }

    getColor():string 
    {
        return this.color;
    }

    setIs5G(is5G: boolean) 
    {
        this.is5G = is5G;
    }

    getIs5G():boolean 
    {
        return this.is5G;
    }

    setCameraNumber(cameraNumber: number) 
    {
        this.cameraNumber = cameraNumber;
    }

    getCameraNumber():number 
    {
        return this.cameraNumber;
    }
    
    setPrice(price: number) 
    {
        this.price = price;
    }

    getPrice():number 
    {
        return this.price;
    }

    public printProperities () //Método que imprime todas las características del objeto en modo lista
    {
        console.log("* 'The characteristics of the mobile " + this.name + " are:'" + "\n" + "     -Name: " + this.name + "\n" + "     -Model: " + this.model + "\n" + "     -Trademark: " + this.trademark + "\n" + "     -SD Size (GB): " + this.sdSize + "\n" + "     -Color: " + this.color + "\n" + "     -Is 5g?: " + this.is5G + "\n" + "     -Number of Cameras: " + this.cameraNumber + "\n" + "     -Price: " + this.price);
    } 

}


