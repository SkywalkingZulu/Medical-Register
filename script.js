var nameInput = document.querySelector("#name-input");
var surnameInput = document.querySelector("#surname-input");
var dateOfBirthInput = document.querySelector("#date-of-birth-input");
var cityInput = document.querySelector("#city-input");
var peselInput = document.querySelector("#pesel-input");

/* nameInput.addEventListener('keyup', function(e) {
  nameText.textContent = nameInput.value;
});

surnameInput.addEventListener('keyup', function(e) {
  surnameText.textContent = surnameInput.value;
});

dateOfBirthInput.addEventListener('keyup', function(e) {
  var birthady = new Date(dateOfBirthInput);
  var today = new Date();
  var years = today.getFullYear() - birthday.getFullYear();
  dateOfBirthText.textContent = years;
});

cityInput.addEventListener('keyup', function(e) {
  cityText.textContent = cityInput.value;
});

peselInput.addEventListener('keyup', function(e) {
  peselText.textContent = peselInput.value;
}); */


var nameText = document.querySelector("#name-text");
var surnameText = document.querySelector("#surname-text");
var dateOfBirthText = document.querySelector("#age");
var cityText = document.querySelector("#city-text");
var peselText = document.querySelector("#pesel-text");
var submit = document.querySelector("#input-submit");

const dateText = document.querySelector("#dateText");

var nameInputSubmit = document.querySelector("#name-input-submit");
var surnameInputSubmit = document.querySelector("#surname-input-submit");
var dateOfBirthInputSubmit = document.querySelector("#date-of-birth-input-submit");
var cityInputSubmit = document.querySelector("#city-input-submit");
var peselInputSubmit = document.querySelector("#pesel-input-submit");


submit.addEventListener('click', function(e) {
if (nameInput.length === 0) {
    warning.textContent = "Values cannot be empty!";
  } else {
    nameText.textContent = nameInput.value;
  }
    surnameText.textContent = surnameInput.value;
    peselText.textContent = peselInput.value;
    cityText.textContent = cityInput.value;
    var birthday = new Date(dateOfBirthInput);
    var today = new Date();
    var years = today.getFullYear() - birthday.getFullYear();
    birthday.setFullYear(today.getFullYear());
    if (today < birthday)
      {
      years--;
      }
    console.log(years);
    dateOfBirthText.textContent = years;
});

//surnameInputSubmit.addEventListener('click', function(e) {

//});

//dateOfBirthInputSubmit.addEventListener('click', function(e) {
//  var birthady = new Date(dateOfBirthInput);
//  var today = new Date();
//  var years = today.getFullYear() - birthday.getFullYear();
//  dateOfBirthText.textContent = years;
//});

//cityInputSubmit.addEventListener('click', function(e) {
  //cityText.textContent = cityInput.value;
//});

//peselInputSubmit.addEventListener('click', function(e) {
  //peselText.textContent = peselInput.value;
//});
