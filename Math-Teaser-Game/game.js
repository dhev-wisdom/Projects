let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let display = document.querySelector('.display');
let ans = document.querySelector('.user-answer');
let submitBtn = document.getElementById('submit');
let btn = document.querySelector('.btn');
let randomNumber1;
let randomNumber2;
let randomNumber3;
let solution = document.querySelector('.correct');
let showLevel = document.querySelector('.show-level');

let levelDisplay = document.querySelector('.level');
let x = document.cookie;
console.log(x);
let data = document.cookie.split("=");
let chosenLevel = data[1];

showLevel.innerHTML = chosenLevel

levelDisplay.innerHTML = `Difficulty: ${chosenLevel.toUpperCase()}`;

    if (chosenLevel == 'easy') {
        randomNumber1 = Math.floor(Math.random() * 10);
        randomNumber2 = Math.floor(Math.random() * 10);
        randomNumber3 = Math.floor(Math.random() * 10);
        display.innerHTML = randomNumber1 + ' + ' + randomNumber2 + ' + ' + randomNumber3;
    } else if (chosenLevel == 'normal') {
        randomNumber1 = Math.floor(Math.random() * 50);
        randomNumber2 = Math.floor(Math.random() * 50);
        randomNumber3 = Math.floor(Math.random() * 50);
        display.innerHTML = randomNumber1 + ' + ' + randomNumber2 + ' + ' + randomNumber3;
    } else if (chosenLevel == 'hard') {
        randomNumber1 = Math.floor(Math.random() * 100);
        randomNumber2 = Math.floor(Math.random() * 100);
        randomNumber3 = Math.floor(Math.random() * 100);
        display.innerHTML = randomNumber1 + ' + ' + randomNumber2 + ' + ' + randomNumber3;
}

function calculate(e){
    let sum = randomNumber1 + randomNumber2 + randomNumber3;
    if (sum === parseFloat(ans.value)) {
        solution.textContent = "CORRECT👏👏👏";
        solution.classList.add("right");
        solution.classList.remove("wrong");
    } else {
        e.preventDefault();
        solution.textContent = "WRONG😪. TRY AGAIN";
        solution.classList.remove("right");
        solution.classList.add("wrong");
    }
    console.log(ans.value);
    console.log(sum);
    console.log(solution);
};

btn.addEventListener('click', calculate);