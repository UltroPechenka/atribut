'use strict'

let elem = document.querySelector('#elem');

let length = elem.classList.length;
console.log(length);

let elemm = document.querySelector('#elem');
let classNames = elemm.classList;

for (let className of classNames) {
	console.log(className);
}