"use strict";

var formElement = document.querySelector('.info__form');
var inputEmail = document.querySelector('.info__input');
var errorElement = document.querySelector('.info__error');
formElement.addEventListener('submit', function (e) {
  e.preventDefault();
  var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(inputEmail.value) == true) {
    errorElement.style.display = 'none';
    inputEmail.style.backgroundImage = 'url("")';
    inputEmail.style.border = '1px solid hsl(0, 36%, 70%)';
  } else {
    errorElement.style.display = 'block';
    inputEmail.style.border = '1px solid red';
    inputEmail.style.backgroundImage = 'url("../assets/svg/icon-error.svg")';
  }
});