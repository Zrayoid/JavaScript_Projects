const prompt = require("prompt-sync")();

function findMax_Min(array)
{
    let max = array[0];
    let min = array[0];
    for ( let i = 0; i < array.length; i++)
    {
        if ( array[i] > max)
        {
            max = array[i];
        }

        if ( array[i] < min)
        {
            min = array[i];
        }
    }

    console.log("Max is: ", max);
    console.log("Min is: ", min);
}

function findEvenOdd(array)
{
    let evenCount = 0;
    let oddCount = 0;
    for ( let i = 0; i < array.length; i++)
    {
        if ( array[i] % 2 === 0)
        {
            evenCount++;
        }
        else
        {
            oddCount++;
        }
    }

    console.log("Even : ", evenCount);
    console.log("Odd : ", oddCount );
}

let sum = 0;
let average = 0;
const arr = [];

for ( let i = 0; i < 5; i++)
{
    let num;

    while (true) 
    {
        let input = prompt(`Enter number ${i + 1}: `);
        num = Number(input);

        if (input.trim() === "" || Number.isNaN(num))
        {
            console.log("Invalid input! Please enter a valid number.");
        }
        else
        {
            break;
        }
    }
    arr[i] = num;
    sum += num;
}

average = sum / 5;

findMax_Min(arr);

console.log("Sum : ", sum);
console.log("Average : ", average)

findEvenOdd(arr);
