// 1. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal
function displayZodiacSign  (day: number, month: number): string
{
    let mensaje: string;
    if ((day >= 20 && month === 1) || (day <= 18 && month === 2))
    {
        mensaje = "Acuario";
    }

    else if ((day >= 19 && month === 2) || (day <= 20 && month === 3))
    {
        mensaje = "Piscis";
    }

    else if ((day >= 21 && month === 3) || (day <= 19 && month === 4))
    {
        mensaje = "Aries";
    }
    
    else if ((day >= 20 && month === 4) || (day <= 20 && month === 5))
    {
        mensaje = "Tauro";
    }

    else if ((day >= 21 && month === 5) || (day <= 20 && month === 6))
    {
        mensaje = "Géminis";
    }

    else if ((day >= 21 && month === 6) || (day <= 22 && month === 7))
    {
        mensaje = "Cáncer";
    }

    else if ((day >= 23 && month === 7) || (day <= 22 && month === 8))
    {
        mensaje = "Leo";
    }

    else if ((day >= 23 && month === 8) || (day <= 22 && month === 9 ))
    {
        mensaje = "Virgo";
    }

    else if ((day >= 23 && month === 9) || (day <= 22 && month === 10))
    {
        mensaje = "Libra";
    }

    else if ((day >= 23 && month === 10) || (day <= 21 && month === 11))
    {
        mensaje = "Escorpio";
    }

    else if ((day >= 22 && month === 11) || (day <= 21 && month === 12))
    {
        mensaje = "Sagitario";
    }

    else 
    {
        mensaje = "Capricornio";
    }

    return mensaje;
}
    

console.log(displayZodiacSign(30, 5));


//2. Realizar un procedimiento que dado un país te  imprima en qué continente estás (Max 5 por continente)
function myContinent (country: string)
{
    switch (country) 
    {
        case "España":
        case "Portugal":
        case "Francia":
        case "Italia":
        case "Alemania":
            console.log("El continente en el que estás es Europa");
            break;
        
        case "Kenia":
        case "Marruecos":
        case "Nigeria":
        case "Sudáfrica":
        case "Tanzania":
            console.log("El continente en el que estás es África");
            break;

        case "China":
        case "Filipinas":
        case "Siria":
        case "India":
        case "Indonesia":
            console.log("El continente en el que estás es Asia");
            break;
        
        case "Estados Unidos":
        case "México":
        case "Panamá":
        case "Argentina":
        case "Perú":
            console.log ("El continente en el que estás es América");
        break;
        
        case "Australia":
        case "Nueva Zelanda":
        case "Fiyi":
        case "Samoa":
        case "Papúa Nueva Guinea":
            console.log ("El continente en el que estás es Oceanía");
            break;

        default:
            console.log('País no encontrado');
    }
}

myContinent("España");


//Lo mismo pero con if
function whatContinentAmI (parametro: string)
{
    if (parametro == "España"|| parametro == "Portugal"|| parametro == "Francia"|| parametro == "Italia"|| parametro == "Alemania")
    {
        console.log("El continente en el que estás es Europa");
    }

    else if (parametro == "Kenia"|| parametro == "Marruecos"|| parametro == "Nigeria"|| parametro == "Sudáfrica"|| parametro == "Tanzania")
    {
        console.log("El continente en el que estás es África");
    }

    else if (parametro == "China"|| parametro == "Filipinas"|| parametro == "Siria"|| parametro == "India"|| parametro == "Indonesia")
    {
        console.log("El continente en el que estás es Asia");
    }

    else if (parametro == "Estados Unidos"|| parametro == "México"|| parametro == "Brasil"|| parametro == "Argentina"|| parametro == "Perú")
    {
        console.log("El continente en el que estás es América");
    }

    else if (parametro == "Australia"|| parametro == "Nueva Zelanda"|| parametro == "Fiyi"|| parametro == "Samoa"|| parametro == "Papúa Nueva Guinea")
    {
        console.log("El continente en el que estás es Oceanía");
    }

    else 
    {
        console.log("País no encontrado");
    }

}

whatContinentAmI("Australia");


// 9. Realizar una función que imprima por consola si el número introducido como parámetro es par o impar.
function evenOdd (number: number)
{
    if (number % 2 == 0)
    {
        console.log("El número introducido es par");
    }

    else 
    {
        console.log("El número introducido es impar");
    }
}

evenOdd(6);

