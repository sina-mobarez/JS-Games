const btn = document.querySelector('#btn');
const showWord = document.querySelector('#words');
const result = document.querySelector('#result');
const guess = document.querySelector('#guess');
const guessWord = document.querySelector('#diff');

var play = false;
var temple;
var score = 0;
btn.addEventListener('click', function () {
    if (!play) {
        guess.classList.toggle('hidden');
        let array = generateWord();
        let dif = array.definition;
        let noun = array.word;
        btn.innerHTML = 'Guess';
        showWord.innerHTML = shuffleword(noun);
        guessWord.innerHTML = dif;
    } else {
        score++;
        result.innerHTML = 'your guess is ' + score;
        if (noun == guess.value) {
            result.innerHTML = 'you win by ' + score + ' guesses';
        } else {
            guess.innerHTML = '';
        }
    }
})

function generateWord() {
    let url = 'https://random-words-api.vercel.app/word';
    var xhr = new XMLHttpRequest();
    var word;

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.response)
            word = response[0];

        }
        else {
            let arrayWord = [{
                'word': 'apple',
                'definition': 'an fruit, a famous tech brand'
            },
            {
                'word': 'samsung',
                'definition': 'a korean tech brand'
            },
            {
                'word': 'hello',
                'definition': 'used as a greeting or to begin a phone conversation.'
            },
            {
                'word': 'request',
                'definition': 'A message sent over a network to a server.'
            },
            {
                'word': 'server',
                'definition': 'A computer dedicated to running such programs.'
            },
            {
                'word': 'ajax',
                'definition': 'is a technique for accessing web servers from a web page.'
            },
            {
                'word': 'madrid',
                'definition': 'a city in spain'
            }];

            let index = Math.floor(Math.random() * arrayWord.length);
            word = arrayWord[index];
        }
    }

    xhr.open('GET', url, true);
    xhr.send();

    return word;
}

function shuffleword(name) {
    let array = name.split('');
    let newArray = [];
    while (array.length > 0) {
        let index = Math.floor(Math.random() * array.length);
        newArray.push(array[index]);
        array.splice(index, 1);
    }
    return newArray.join('');
}