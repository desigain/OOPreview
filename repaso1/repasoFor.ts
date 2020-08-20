// 3. Realizar una función que imprima los números impares existentes hasta el número indicado como parámetro de entrada.
function printOddNumbers (number: number)
{
        for (let i=1; i<=number; i+=2)
        console.log(i);
}

printOddNumbers(17);


// 4. Realizar una función que como parámetro de entrada reciba un array y como salida devuelva el array revertido
function reverseArray (parametro: number[]): number[]  
{
    let newArr: number [] = [];
    let reves: number = 0;
    for (let i = parametro.length-1; i>=0; i--) 
    {
        newArr.push(parametro[i]);

    }
    return newArr;
}

console.log(reverseArray([5,6,7,8,9,10,11]));


// 5. Realizar una función que reciba como parámetro un array de strings que contenga colores e imprima en cada caso si está en el arcoiris o no.
function isInTheRainbow (arrayOfColors:string [])
{
    for (let i=0; i<arrayOfColors.length; i++)
    {
        if (arrayOfColors[i] == "rojo" || arrayOfColors[i] == "naranja" || arrayOfColors[i] == "amarillo" || arrayOfColors[i] == "verde" || arrayOfColors[i] == "azul"
        || arrayOfColors[i] == "añil" || arrayOfColors[i] == "violeta")
        {
            console.log("Este color sí está en el arcoíris");
        }

        else
        {
            console.log("Este color no está en el arcoíris");
        }
    }
}

let misColores: string [] = ["rojo", "negro", "blanco", "amarillo", "naranja", "morado", "violeta", "turquesa", "añil", "granate", "verde"];
console.log(isInTheRainbow(misColores));


// 8. Realizar una función que te devuelva la suma del número de caracteres de las palabras almacenadas en un array.
function sumCharacters (parametro: string []): number
{
    let suma: number = 0; 
    for (let i=0; i<parametro.length; i++)
    {
        suma += parametro[i].length;
    }
    return suma;
}
console.log(sumCharacters(["hola", "adiós"]));


//9. Realizar una función que imprima por consola si el número introducido como parámetro es par o impar.
// (ESTÁ EN DOCUMENTO REPASOIF comentada pero la pongo aquí para poder llamarla en ejercicio 10)
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

// 10. Utilizando las dos funciones anteriores indicar si es par o impar la suma de los caracteres de estos arrays:
let firstArr: string [] = ["Casa", "Coche", "Ciudad", "Cesta"]; // 20
let secondArr:string [] = ["Barco", "Baca", "Bicicleta", "Balón", "Bisiesto", "Brasil"]; //37
let thirdArr:string [] = ["Venezuela", "Veneno", "Voltaje"]; //22

function parOimpar (parametro: string [])
{
    let resultadoSuma: number = 0;
    for (let i=0; i<parametro.length; i++)
    {
        resultadoSuma = sumCharacters(parametro);
    }
    
    return evenOdd(resultadoSuma);  // esta función está en el documento repasoIf, ejercicio  9
} 

console.log(parOimpar(firstArr));
console.log(parOimpar(secondArr));
console.log(parOimpar(thirdArr));


//Usando las dos funciones en la misma línea.
console.log(evenOdd(sumCharacters(firstArr)));
console.log(evenOdd(sumCharacters(secondArr)));
console.log(evenOdd(sumCharacters(thirdArr)));