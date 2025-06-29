const questions = [
    {
        question: "Which of the following is NOT a valid JavaScript variable name?",
        options: ["_variableName","2ndVariable","variable_name","variableName"],
        answer: "2ndVariable"
    },
    {
        question: "What does the === operator in JavaScript check for?",
        options: ["value equality only","Type equality only","Both value and type equality","Logical AND"],
        answer: "Both value and type equality"
    },
    {
        question: "Which keyboard is used to declare a variable in JavaScript?",
        options: ["var","let","const","All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        options: ["push()","pop()","shift()","unshift()"],
        answer: "push()"
    },
    {
        question: "What is the purpose of the break statement in a switch statement?",
        options: ["To skip the next case","To exit the switch statement","To execute the default case","To terminate the program"],
        answer: "To exit the switch statement"
    }
];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

    const questionB = document.getElementById("qBox");
    const optionB = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
    const timerBox = document.getElementById("timer");
    const scoreBox = document.getElementById("scoreB");

    function showQ(){
        clearInterval(timer);
        timeLeft = 10;
        timerBox.innerText = `${timeLeft}`;
        timer = setInterval(updateTimer,1000);
        let q = questions[currentIndex];
        questionB.innerText = q.question;

        optionB.innerHTML = "";
        q.options.forEach(Option => {
            let btn = document.createElement("button");
            btn.innerText = Option;
            btn.classList.add("optionBtn");
            btn.addEventListener("click",() => checkAnswer(Option));
            optionB.appendChild(btn);
        });
    }
        function updateTimer() {
            timeLeft--;
            timerBox.innerText = `${timeLeft}`;
            if(timeLeft === 0){
                clearInterval(timer);
                autoNext();
            }
        }

        function checkAnswer(selected){
            clearInterval(timer);
            let correct = questions[currentIndex].answer;
            if (selected === correct) {
            score++;
        }
        autoNext();

    }
    function autoNext() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQ();
  } else {
    showScore();
  }
}

function showScore() {
  questionB.innerText = "Quiz Completed!";
  optionB.innerHTML = "";
  timerBox.innerText = "";
  nextBtn.style.display = "none";
  scoreBox.innerText = `Your Score: ${score}/${questions.length}`;
}

nextBtn.addEventListener("click", autoNext);

window.onload = showQ;

    
