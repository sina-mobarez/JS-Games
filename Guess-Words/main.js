const btn = document.querySelector('#btn');
const showWord = document.querySelector('#words');
const result = document.querySelector('#result');
const guess = document.querySelector('#guess');
const guessWord = document.querySelector('#diff');

var play = false;
var temple;
var score = 0;
var noun;
btn.addEventListener('click', function () {
    if (!play) {
        guess.classList.toggle('hidden');
        let array = generateWord();
        let dif = array.definition;
        noun = array.word;
        noun = noun.toLowerCase();
        btn.innerHTML = 'Guess';
        result.innerHTML = '';
        showWord.innerHTML = shuffleword(noun);
        guessWord.innerHTML = dif;
        play = true;
        score = 0;
    } else {
        var g = guess.value;
        score++;
        result.innerHTML = 'your guess is ' + score;
        checkwin(noun, g);

    }
})

function generateWord() {
    let url = 'https://random-words-api.vercel.app/word';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    var word;

    if (xhr.status == 200) {
        let response = JSON.parse(xhr.response)
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


function checkwin(n, g) {
    if (n === g) {
        result.innerHTML = 'you win by ' + score + ' guesses --- <h5>' + noun + '</h5>';
        btn.innerHTML = 'Play Again';
        guess.classList.toggle('hidden');
        play = false;
    } else {
        guess.value = '';
    }
}