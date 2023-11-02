'use strict'

let elem = document.querySelector('#elem');

elem.addEventListener('click', function(){
    console.log(elem.dataset.num);
     
    let dataText = elem.dataset.text;

    elem.textContent += dataText;
});

let countB = document.querySelector('#countButton');
let showCountB = document.querySelector('#showCountButton');
let clickCount = document.querySelector('#clickCount');

let clickCounter = 0;

    countB.addEventListener('click', function(){
    clickCounter++;

    countB.setAttribute('data-clicks', 'clickCounter');

    clickCount.textContent = clickCounter;
});

showCountB.addEventListener('click', function(){
    let clicks = countB.getAttribute('data-clicks');

    alert('Количество кликов по первой кнопке: ' + clicks);
});