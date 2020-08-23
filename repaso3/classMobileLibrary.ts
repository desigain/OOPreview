import {Mobile} from "./classMobile"
export 

class MobileLibrary
{
    //Declaración de atributos o propiedades
    private name: string;
    private location: string;
    private mobiles: Mobile []; 
    private totalPrice: number;
   
    //Implementación del método constructor
    constructor (name:string, location: string, mobiles: Mobile[])
    {
        this.name = name;
        this.location = location; 
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
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

    setLocation(location: string) 
    {
        this.location = location;
    }

    getLocation():string 
    {
        return this.location;
    }

    setMobiles(mobiles: Mobile[]) 
    {
        this.mobiles = mobiles;
    }

    getMobiles():Mobile[] 
    {
        return this.mobiles;
    }

    setTotalPrice(totalPrice: number) 
    {
        this.totalPrice = totalPrice;
    }

    getTotalPrice():number 
    {
        return this.totalPrice;
    }

    // Otros métodos 
    private totalPriceCalculation (): number // Calcula el precio total de la librería (suma todos los precios de todos los objetos que hay en mobiles y se guardan en this.totalPrice)
    {
        //let sumaPrecios: number = 0;
        this.totalPrice = 0;

        for (let i=0; i<this.mobiles.length; i++)
        {
            //sumaPrecios += this.mobiles[i].getPrice();
            this.totalPrice += this.mobiles[i].getPrice();
        }

        //this.totalPrice = sumaPrecios;
        return this.totalPrice; 
    } 

    public printLibrary() // recorre todos los objetos el atributo mobiles y los muestra por consola en modo lista
    {
        console.log("• 'This is all my mobiles:' ");
        let caracteristicas: string = "";
        for (let i=0; i<this.mobiles.length; i++)
        {
            caracteristicas += this.mobiles[i].printProperities();
        }
        console.log("• 'Price overall: " + this.totalPrice);
    }
}


// En elfichero principal crear los objetos necesarios paracrear un nuevo objeto de la clase MobileLibrary y comprobar todos sus métodos
let movil1 = new Mobile ("Iphone 6S Plus", "6S Plus", "Apple", 128, "white", true, 3, 268.55);
let movil2 = new Mobile ("Huawei P30", "P30", "Huawei Inc.", 64, "black", false, 2, 249.99);
let movil3 = new Mobile ("LG V50", "LG V50 ThinQ 5G", "LG Corp.", 128, "silver", true, 5, 899);

let miStock : Mobile [] = [movil1, movil2, movil3];

let tiendaPrueba = new MobileLibrary ("Phone House", "San Sebastián de los Reyes (Madrid)", miStock);

//Probando getters
console.log(tiendaPrueba.getLocation());
console.log(tiendaPrueba.getMobiles());
console.log(tiendaPrueba.getName());
console.log(tiendaPrueba.getTotalPrice());

//Probando setters
tiendaPrueba.setLocation("c/ Mayor, 18 (Santander)");
tiendaPrueba.setName("Mobile Corporation");
tiendaPrueba.setTotalPrice(3584.99);

//cambio el array de móviles
let Nokia3210 = new Mobile("Nokia3210", "model3210", "Nokia Corporation", 5, "red", false, 1, 65.00);
let iPhone3G = new Mobile("Iphone", "Iplus3", "Apple", 128, "silver", true, 3, 899.00);
let SamsungGalaxy10 = new Mobile("Samsung", "Galaxy10", "SSG Corporation", 64, "black", true, 2, 450.99);
let Oneplus3T = new Mobile ("OnePlus 3T", "3T Plus", "Google", 64, "golden", true, 2, 488.99);

let misMoviles : Mobile [] = [Nokia3210, iPhone3G, SamsungGalaxy10, Oneplus3T]; 

tiendaPrueba.setMobiles(misMoviles);

// Compruebo los cambios hechos con los setters
console.log(tiendaPrueba.getLocation());
console.log(tiendaPrueba.getName());
console.log(tiendaPrueba.getTotalPrice());
console.log(tiendaPrueba.getMobiles());

tiendaPrueba.setMobiles(miStock);
//Probando el resto de métodos: En este caso solo printLibrary porque totalPriceCalculation es privado y ya accedemos con getTotalPrice
tiendaPrueba.printLibrary();
