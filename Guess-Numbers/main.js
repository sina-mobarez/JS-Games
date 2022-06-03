const button = document.querySelector('#btn');
const game = document.querySelector('.game');
const message = document.querySelector('#message');
const win = document.querySelector('#winner');
const level = document.querySelector('#level')
var box;
var range;
var gameplay = false;
var score = 0;

button.addEventListener('click', function () {
    if (!gameplay) {
        if (level.value == 'hard') {
            box = 10;
            range = 100;
        } else if (level.value == 'normal') {
            box = 7;
            range = 50;
        } else {
            box = 5;
            range = 10;
        }
        level.style.display = 'block' ;
        let labl = document.getElementsByName('label');
        labl.innerHTML = "Choose Level";

        maker();

        gameplay = true;
    }
    else {
        score ++;
        message.innerHTML = 'You Guess ' + score + ' time ; ';
        const numbers = document.querySelectorAll('.box');
        console.log(numbers);
        let winCondition = 0;

        for(let i=0;i<numbers.length;i++){
            if(numbers[i].value == numbers[i].correct){
                winCondition ++;
                numbers[i].style.backgroundColor = 'green';
                numbers[i].style.color = 'white';
                numbers.readonly = true;
            }
            else {
                let color = (numbers[i].value < numbers[i].correct) ? 'red' : 'blue';
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = 'black';
            }
            if(winCondition == numbers.length){
                winn();
            }
        }

    }

});

function winn(){
    win.innerHTML = 'Yooohoo you got it, in :' + score + ' guess .'
    button.innerHTML = 'Strat Again';
    gameplay = false;
    message.innerHTML = '-----------------------------------------';
    game.innerHTML="";
}

function maker() {
    for (let i = 0; i < box; i++) {
        let el = document.createElement('input');
        el.value = 0;
        el.type = 'number';
        el.max = range;
        el.min = 0;
        el.classList = 'box';
        el.correct = Math.floor(Math.random() * range);
        let div = document.createElement('div');
        div.appendChild(el); 
        game.appendChild(div);
        button.innerHTML = 'Check';
        win.innerHTML = 'if color of a box is <strong>Blue</strong> Your Guess is so <b>Bigger</b> else if color of a box is <strong>Red</strong> Your Guess is so <b>smaller</b> good luck';
    }
    level.style.display = 'none' ;
    let labl = document.getElementsByName('label');
    labl.innerHTML = "";
    message.innerHTML = "";
}