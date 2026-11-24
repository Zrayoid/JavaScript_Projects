const prompt = require("prompt-sync")();

let score = 0;
let answer;
const questions = 
[   { question: "How is our tutor?",
      questionA: "A: gemini",
      questionB: "B: Perplexity",
      questionC: "C: Chat gpt",
      questionD: "D: Cloud",
      answer: "C"
    },

    { question: "What language is this code written in?",
      questionA: "A: JavaScript",
      questionB: "B: Python",
      questionC: "C: C++",
      questionD: "D: HTML",
      answer: "A"
    },

    { question: "What is your core language?",
      questionA: "A: JavaScript",
      questionB: "B: Python",
      questionC: "C: C++",
      questionD: "D: HTML",
      answer: "C"
    },

    { question: "What is your level?",
      questionA: "A: Beginner",
      questionB: "B: Intermediate",
      questionC: "C: Advanced",
      questionD: "D: Master",
      answer: "A"
    },

    { question: "Who is the main character of One Piece?",
      questionA: "A: Naruto",
      questionB: "B: Zoro",
      questionC: "C: Shanks",
      questionD: "D: Luffy",
      answer: "D"
    },
]

const validAnswer = ["A", "B", "C", "D"]

for ( let i = 0; i < questions.length; i++)
{
    console.log(questions[i].question);
    console.log(questions[i].questionA);
    console.log(questions[i].questionB);
    console.log(questions[i].questionC);
    console.log(questions[i].questionD);

    while ( true )
    {
        answer = prompt("Enter your answer: ").trim().toUpperCase();

        if ( validAnswer.includes(answer))
        {
            break
        }
        else
        {
            console.log("Invalid option selection! Select again: ");
        }

    }
    if ( answer === questions[i].answer)
    {
        console.log("Correct Answer.");
        score++;
    }
    else
    {
        console.log("Wrong Answer.");
    }
}

console.log("Your score is: ", score );

