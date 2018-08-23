var nameInput = document.querySelector("#name-input");
var surnameInput = document.querySelector("#surname-input");
var dateOfBirthInput = document.querySelector("#date-of-birth-input");
var cityInput = document.querySelector("#city-input");
var peselInput = document.querySelector("#pesel-input");

var nameText = document.querySelector("#name-text");
var surnameText = document.querySelector("#surname-text");
var dateOfBirthText = document.querySelector("#date-of-birth-text");
var cityText = document.querySelector("#city-text");
var peselText = document.querySelector("#pesel-text");

nameInput.addEventListener('keydown', function(e) {
  nameText.textContent = nameInput.value;
});

surnameInput.addEventListener('keydown', function(e) {
  surnameText.textContent = surnameInput.value;
});

dateOfBirthInput.addEventListener('keydown', function(e) {
  dateOfBirthText.textContent = dateOfBirthInput.value;
});

cityInput.addEventListener('keydown', function(e) {
  cityText.textContent = cityInput.value;
});

peselInput.addEventListener('keydown', function(e) {
  peselText.textContent = peselInput.value;
});
