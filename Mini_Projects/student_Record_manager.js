const prompt = require("prompt-sync")();

const studentsData = [
    { id: 1, Name: "Alex", Marks: 85 },
    { id: 2, Name: "John", Marks: 75 },
    { id: 3, Name: "Sam", Marks: 90 }
]


function getValidId() {
    while (true) {
        let input = prompt("Enter student ID: ");
        let id = Number(input);

        if (input.trim() === "" || !Number.isInteger(id) || id <= 0) {
            console.log(" Invalid ID. Try again.");
        }
        else {
            return id;
        }
    }
}

function getValidName() {
    
    while (true) {
        let Name = prompt("Enter student Name: ");

        if (Name.trim() === "") {
            console.log("Ivalid Name! \n Enter Name again");
        }
        else {
            return Name.trim();
        }
    }
}


function getValidMarks() {
    while (true) {
        let markcheck = prompt("Enter you student_Marks: ");
        let marks = Number(markcheck);

        if (markcheck.trim() === "" ||
            !Number.isFinite(marks) ||
            (marks < 0 || marks > 100)
        ) {
            console.log("Invalid Marks! \n Enter Marks Again");
        }
        else {
            return marks;
        }
    }
}


function findStudent(id) {
    for (let i = 0; i < studentsData.length; i++) {
        if (studentsData[i].id === id) {
            return i;
        }
    }

    return -1;
}

function register() {
    let student_id;
    let student_name;
    let student_marks;

    for (let i = 0; i < 2; i++) {

        while (true) {
            student_id = getValidId();

            if (findStudent(student_id) !== -1) {
                console.log("ID already taken! \n Enter a Different id");
            }
            else {
                break;
            }

        }

        student_name = getValidName();
        student_marks = getValidMarks();

        // pushing a fresh object into array with my keys
        studentsData.push(
            {
                id: student_id,
                Name: student_name,
                Marks: student_marks
            });
    }

}

function searchStudent() {

    let id = getValidId();
    let index = findStudent(id);

    if (index !== -1) {
        console.log(
            studentsData[index].id + " " +
            studentsData[index].Name + " " +
            studentsData[index].Marks
        );
    }
    else {
        console.log("Student not found.");
    }


}

function UpdateStudent() {

    let id = getValidId();
    let index = findStudent(id);

    if (index !== -1) {
        console.log(studentsData[index].id + " "
            + studentsData[index].Name + " "
            + studentsData[index].Marks)

        studentsData[index].Marks = getValidMarks();
        console.log("Updates Marks!!");
        console.log("\n\n");
        console.log(studentsData[index].id + " "
            + studentsData[index].Name + " "
            + studentsData[index].Marks)

    }
    else {
        console.log("Student Not Found!!");
    }


}

function DeleteStudent() {

    let id = getValidId();
    let index = findStudent(id);

    if (index !== -1) {
        studentsData.splice(index, 1);
        console.log("Delete successful");
    }
    else {
        console.log("Student not found")
    }
}

function displayAllStudents() {
    for (let i = 0; i < studentsData.length; i++) {
        console.log(studentsData[i].id + " " + studentsData[i].Name + " " + studentsData[i].Marks)
    }
}

function OperationCenter() {
    let choice;
    const valideOperation = [1, 2, 3, 4, 5, 6]

    while (choice != 6) {
        while (true) {

            console.log("======Menu======");
            console.log("1. Add a student.");
            console.log("2. Search Student. ");
            console.log("3. Update Student.");
            console.log("4. Display All Students.");
            console.log("5. Delete student");
            console.log("6. Exit");

            let numCheck = prompt("Enter your choice: ");
            choice = Number(numCheck);
            if (numCheck.trim() === "" || Number.isNaN(choice) || !valideOperation.includes(choice)) {
                console.log("Invalid Selection!\n Select Again: ")
            }
            else {
                break;
            }

        }

        switch (choice) {
            case 1:
                register();
                break;
            case 2:
                searchStudent();
                break;
            case 3:
                UpdateStudent();
                break;
            case 4:
                displayAllStudents();
                break;
            case 5:
                DeleteStudent();
                break;
            case 6:
                console.log("Bye bye.");
                break;
            default:
                console.log("Invalid Operation.");
                break;
        }

    }
}

OperationCenter();



