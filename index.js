const cardHolderInput = document.querySelector("#card_holder_name_input");
const cardNumberInput = document.querySelector("#card_number_input");
const expMonthInput = document.querySelector("#exp_month_input");
const expYearInput = document.querySelector("#exp_year_input");
const formElem = document.querySelector("form");

const cardNumberElem = document.querySelector(".card_number");
const cardHolderNameElem = document.querySelector(".cardholder_name");
const expDateElem = document.querySelector(".card_exp_date");

cardHolderInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  cardHolderNameElem.textContent = e.target.value;
});

cardNumberInput.addEventListener("keyup", (e) => {
  cardNumberElem.textContent = e.target.value;
});

expMonthInput.addEventListener("keyup", (e) => {
  expDateElem.children[0].textContent = e.target.value;
});

expYearInput.addEventListener("keyup", (e) => {
  expDateElem.children[1].textContent = e.target.value;
});

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
});
