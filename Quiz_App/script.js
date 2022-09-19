const questionCollection = [
    {
        question: 'What is Software Engineering?',
        a: 'Designing a software',
        b: 'Testing a software',
        c: 'Application of engineering principles to the design a software',
        d: 'None of the above',
        correct: 'c'
    },
    {
        question: 'Who is the father of Software Engineering?',
        a: 'Margaret Hamilton',
        b: 'Watts S. Humphrey',
        c: 'Alan Turing',
        d: 'Boris Beizer',
        correct: 'b'
    },
    {
        question: 'What are the features of Software Code?',
        a: 'Simplicity',
        b: 'Accessibility',
        c: 'Modularity',
        d: 'All of the above',
        correct: 'c'
    },
    {
        question: 'CASE stands for',
        a: ' Computer-Aided Software Engineering',
        b: 'Control Aided Science and Engineering',
        c: 'Cost Aided System Experiments',
        d: 'None of the mentioned',
        correct: 'a'
    },
]

let questionID = document.getElementById("question");
let questionOptionA = document.getElementById("a_text");
let questionOptionB = document.getElementById("b_text");
let questionOptionC = document.getElementById("c_text");
let questionOptionD = document.getElementById("d_text");
let submitButtonID = document.getElementById("submitButton");
let questionselectionOption = document.querySelectorAll('input[class="xyz"]');
let result = document.getElementById("quiz")



let questionCheckIndex = Object.keys(questionCollection).length;
let questionIndex = 0;
let marks = 0;
let questionQuiz ;
function radioButtonDeSelected() {

    questionselectionOption.forEach((questionID) => {

        if (questionID.checked) {
            questionID.checked = false;
        }
    })
}

function quizCall() {
    radioButtonDeSelected();
    questionQuiz = questionCollection[questionIndex];
    questionID.innerText = questionQuiz.question;
    questionOptionA.innerText = questionQuiz.a;
    questionOptionB.innerText = questionQuiz.b;
    questionOptionC.innerText = questionQuiz.c;
    questionOptionD.innerText = questionQuiz.d;
    
}


function radioButtonSelected() {
    let ans = undefined;
    questionselectionOption.forEach((questionID) => {

        if (questionID.checked) {
            ans = questionID.id;

        }
    })
    return ans;
}

quizCall();

submitButtonID.addEventListener("click", () => {

    const answer = radioButtonSelected();
    
    if (answer) {
        if ((answer) === (questionQuiz.correct)) {
            marks++;
            console.log(marks);
        }
        questionIndex++;

        if (questionIndex < questionCheckIndex) {

            quizCall();

        } else {

            result.innerHTML = `<h1>Correct Answer = ${marks}/${questionCheckIndex}</h1>`
        }
    } else {
        window.alert("please select answer");
    }

})
