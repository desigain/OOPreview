   //función que muestra el número más bajo de un array
   function lowestNumber (arrayOfNumbers: number []): number {
    let lowest: number = 87687678
    for (let i=0; i<arrayOfNumbers.length; i++)
    {
        if (arrayOfNumbers[i] < lowest) {
            lowest = arrayOfNumbers[i]

        }
    }

    return lowest;
   }
      
   console.log(lowestNumber([4,6,2,9]));

