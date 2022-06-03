const btn = document.querySelector('button');
const question = document.querySelector('input');
const message = document.querySelector('#message');
const answer = [
    'yes, or maybe not',
    'what do you think',
    'maybe maybe not',
    'i dont know',
    'probably not',
    'who knows the truth',
    'just let me take some rest',
    'ok, that is right'
]
btn.addEventListener('click', function(){
    let ans = Math.floor(Math.random() * answer.length);
    output = question.value + ' ? <br> ' + answer[ans];
    message.innerText = output;
    question.value = '';
})