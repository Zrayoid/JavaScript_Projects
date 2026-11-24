const prompt = require("prompt-sync")();

const validOperations = [1, 2, 3, 4]

let Balance = 10000;
let choice = 0;
while (choice != 4) {
    console.log("====ATM MACHINE====");
    console.log("1. Check Balance");
    console.log("2. Withdraw Money");
    console.log("3. Deposite Money");
    console.log("4. Exit");
    console.log("Enter 1 - 4 to choose an Operation to perform");

    // Operation Selection Validation.
    while (true) {
        let select = prompt("Enter your choice: ");
        choice = Number(select);

        if ((select.trim() === "" || Number.isNaN(choice)) || !validOperations.includes(choice)) {
            console.log("Invalid input! Select a valid input.\n");
        }
        else {
            break;
        }
    }

    switch (choice) {
        case 1:
            console.log(`Balance : ${Balance}.`);
            break;
        case 2:
            withdrawMoney();
            break;
        case 3:
            depositMoney();
            break;
        case 4:
            console.log("Good Bye...");
            break;
        default:
            console.log("Invalid input! Select a Valid Operation.\n");

    }
}

function depositMoney() {
 
    let amount;
    while (true) {
        let Money = prompt("Enter the amount: ");
        amount = Number(Money);

        if (Money.trim() === "" || Number.isNaN(amount))
        {
            console.log("Invalid Amount! Ente Amount Again: ");
        }
        else
        {
            break;
        }
    }


    if ( amount > 0 )
    {
        Balance += amount;
        console.log("Deposit Successful..");
    }
    else
    {
        console.log("Invalid deposit amount.");
    }

    console.log(`Updated Balance ${Balance}`);
}

function withdrawMoney() {
    let amount;
    while (true) {

        let Money = prompt("Enter the amount: ");
        amount = Number(Money);
        if (Money.trim() === "" || Number.isNaN(amount)) {
            console.log("Invalid amount! Enter Amount Again: ");
        }
        else {
            break;
        }
    }

    if ( (amount <= Balance && amount > 0) && !Number.isNaN(amount))
    {
        Balance -= amount;
        console.log("Withdrawal Successful..");
    }
    else if( amount > Balance)
    {
        console.log("Not enough Balance.");
    }
    else
    {
        console.log("Invali Amount! Enter Amount Again: ");
    }

    console.log(`Updated Balance ${Balance}`);

}


