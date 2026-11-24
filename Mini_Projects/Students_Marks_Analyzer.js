
const studentsData = [
    { Name: "Rex", Marks: 60 },
    { Name: "Dofy", Marks: 30 },
    { Name: "Luffy", Marks: 1 },
    { Name: "Zoro", Marks: 50 },
    { Name: "Sanji", Marks: 80 },
    { Name: "Alex", Marks: 85 },
    { Name: "John", Marks: 35 },
    { Name: "Sam", Marks: 60 },
    { Name: "David", Marks: 25 },
    { Name: "Emma", Marks: 90 }
]

studentsData.forEach((data) => {
    console.log(` Name:${data.Name}  Marks ${data.Marks}`)
});

const bonusMarks = studentsData.map((data) => {
    return {
        Name: data.Name,
        Marks: data.Marks + 5
    };
});
console.log("Bonus 5 Marks for each student \n", bonusMarks);

const passed = studentsData.filter((data) => {
    return data.Marks >= 40;
});

const average = studentsData.reduce((sum, data) => {
    return sum + data.Marks;
}, 0);

// average of passed students
const Paverage = passed.reduce((sum, data) => {
    return sum + data.Marks;
}, 0);

if (passed.length > 0) {
    console.log("\n");
    console.log("These students Passed:\n", passed);
    console.log("\n");
    console.log("Average Marks: ", (average / studentsData.length));
    console.log("\n");
    console.log("Average Marks of Passed students: ", (Paverage / passed.length));
}
else {
    console.log("0 students passed");
}
