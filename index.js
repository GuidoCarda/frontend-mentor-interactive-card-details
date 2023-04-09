const cardHolderInput = document.querySelector("#card_holder_name_input");
const cardNumberInput = document.querySelector("#card_number_input");
const expMonthInput = document.querySelector("#exp_month_input");
const expYearInput = document.querySelector("#exp_year_input");
const cvcInput = document.querySelector("#cvc_input");

const formElem = document.querySelector("form");
const cardNumberElem = document.querySelector(".card_number");
const cardHolderNameElem = document.querySelector(".cardholder_name");
const expDateElem = document.querySelector(".card_exp_date");
const cvcElem = document.querySelector(".card_cvc");

cardHolderInput.addEventListener("keyup", (e) => {
  cardHolderNameElem.textContent = e.target.value;
});

cardNumberInput.addEventListener("keyup", (e) => {
  const value = e.target.value
    .replace(/[^0-9]/gi, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

  cardNumberInput.value = value;
  cardNumberElem.textContent = value;
});

expMonthInput.addEventListener("keyup", (e) => {
  expDateElem.children[0].textContent = e.target.value;
});

expYearInput.addEventListener("keyup", (e) => {
  expDateElem.children[1].textContent = e.target.value;
});

cvcInput.addEventListener("keyup", (e) => {
  cvcElem.textContent = e.target.value;
});

formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cardHolderInput) {
  }
  if (cardNumberInput.value) {
  }
  if (expMonthInput.value) {
  }
  if (expYearInput.value) {
  }
  if (cvcInput.value) {
  }

  const completedState = `
  <div class='completeState'/>  
    <img src="/images/icon-complete.svg"/>
    <h1 class='completeState-title'>thank you</h1>
    <p class='completeState-desc'>we've added your cards details</p>
    <button id="continueBtn" class='button'>continuar</button>
  </div>
`;

  document.querySelector("section").innerHTML = completedState;

  const continueBtn = document.querySelector("#continueBtn");

  continueBtn.addEventListener("click", () => {
    window.location.reload();
  });
});
