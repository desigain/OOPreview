// 6. Realizar una función que te devuelva si existe un número par en el array de números que introduces como parámetro de entrada.
function anyEven (arrayNumbers:number[]): boolean
{
    let foundEven: boolean = false;
    let i: number = 0;
    
    while (i <= arrayNumbers.length && !foundEven)
    {
        if (arrayNumbers[i] % 2 == 0)
        {
            foundEven = true;
        }
        
        i++
    }
    return foundEven;
}

let miArray: number [] = [1, 5, 7, 9];
console.log(anyEven(miArray));


// 7. Realizar un procedimiento que reciba un array de nombres y te devuelva verdadero si y solo si todos los nombres empiezan por M.
function mFirstLetter (parametro: string[]): boolean
{
    let i: number = 0;
    let empiezanPorM: boolean = true;
    while (i < parametro.length && empiezanPorM)
    {
        if (parametro[i][0] != "M")
        {
            empiezanPorM = false;
        }

        i++
    }
    
    return empiezanPorM;

}

let nombresConM : string [] = ["María", "Mónica", "Manuel"];
console.log(mFirstLetter(nombresConM));
