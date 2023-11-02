'use strict'

let elem = document.querySelector('#elem');

elem.addEventListener('click', function(){

    let productPrice = elem.dataset.productPrice;
    let productAmount = elem.dataset.productAmount;

    let totalPrice = productPrice + productAmount;

    elem.textContent  += 'Стоимость: ' + totalPrice + 'руб.';
});