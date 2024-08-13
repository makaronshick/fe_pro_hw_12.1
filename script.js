"use strict";
/* 
На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання,
при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const enterLinkBtnElement = document.querySelector(".link_btn");
const goBtnElement = document.querySelector(".go_btn");

let savedLink = null;

enterLinkBtnElement.addEventListener("click", () => {
  const userInput = prompt("Enter the link (start with 'http/https')");

  if (!userInput?.trim() || !userInput.startsWith("http")) {
    alert("Incorrect link entered (or canceled)");
    return;
  }

  savedLink = userInput;
});

goBtnElement.addEventListener("click", () => {
  if (savedLink) {
    window.location.href = savedLink;
  } else {
    alert("Enter correct link first");
  }
});
