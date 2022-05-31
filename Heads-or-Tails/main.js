var button = document.getElementsByTagName('button');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', flip);
}

const coinArray = ['Heads', 'Tails'];
var score = [0, 0];

function flip(e) {
    let playerChoice = e.target.innerText;
    let computerChoice = coinArray[Math.floor(Math.random() * 2)]
    var message = document.getElementById('message');
    message.innerHTML = 'Computer choose : ' + computerChoice;
    let output;
    if (computerChoice === playerChoice) {
        score[0]++;
        output = '<br> Player Win; <br> player : ' + score[0] + ' / Computer : ' + score[1];
    } else {
        score[1]++;
        output = '<br> Computer Win; <br> player : ' + score[0] + ' / Computer : ' + score[1];
    }
    message.innerHTML += output;
}