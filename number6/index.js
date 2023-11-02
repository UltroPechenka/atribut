'use strict'

let paragraphs = document.querySelector('#elem');

for (let i = 0; i < paragraphs.length; i++) {

    paragraphs[i].setAttribute('data-num', i + 1);
}

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].getAttribute('data-num'));
}