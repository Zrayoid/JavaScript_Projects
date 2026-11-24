const prompt = require("prompt-sync")();

function calculator() {
    let num1, num2;
    let choice = 0;
    let select = "yes";
    while (select !== "no") 
    {
        while (true)
        {
            let number1 = prompt("Enter first Number: ");
            num1 = Number(number1);

            if (number1.trim() === "" || Number.isNaN(num1)) {
                console.log("Invalid input! enter a Number1: ");
            }
            else {
                break;
            }
        }

        while (true)
        {
            let number2 = prompt("Enter second Number: ");
            num2 = Number(number2);

            if (number2.trim() === "" || Number.isNaN(num2)) {
                console.log("Invalid input! enter a Number2: ");
            }
            else {
                break;
            }
        }

        while(true)
        {
            console.log("Choose operation: ")
            console.log("1. Addition")
            console.log("2. Subtraction")
            console.log("3. Multiplication")
            console.log("4. Division")
    
            let ch = prompt("Enter your choice: ");
            choice = Number(ch);

            if (ch.trim() === "" || Number.isNaN(choice) || choice < 1 || choice > 4)
            {
                console.log("Invalid operation! Enter Again: ");
            }
            else
            {
                break;
            }

        }

        switch (choice) {
            case 1:
                console.log(num1 + num2);
                break;
            case 2:
                console.log(num1 - num2);
                break;
            case 3:
                console.log(num1 * num2);
                break;
            case 4:
                if (num2 === 0) {
                    console.log("Division can't be performed for 0 denominator.")
                }
                else 
                {
                    console.log(num1 / num2);
                }

                break;

        }

        select = prompt("Do another calculation? (yes/no): ").trim().toLowerCase();
    }
}

calculator();