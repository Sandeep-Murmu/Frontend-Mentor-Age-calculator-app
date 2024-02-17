// individual inputs
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

const getOutput = document.getElementById("get-output"); //output button
const inputArr = document.querySelectorAll(".date-input"); //arr of inputs
const errorMessage = document.querySelectorAll(".err-msg"); //arr of error message below input field

// for date
let date = new Date();
let today = date.getDate();
let currMonth = date.getMonth() + 1;
let currYear = date.getFullYear();

const required = "This field is required";
const valid = [
  "Must be a valid day",
  "Must be a valid month",
  "Must be in the past",
];

let calculate = false;

// function for checking the validation of input field
function checkError(inp, index) {
  switch (index) {
    case 0:
      if (inp >= 31 || inp < 1) {
        errorMessage[index].innerText = valid[index];
      } else {
        errorMessage[index].innerText = "";
      }
      break;

    case 1:
      if (inp > 12 || inp < 1) {
        errorMessage[index].innerText = valid[index];
      } else {
        errorMessage[index].innerText = "";
      }
      break;

    case 2:
      if (inp > currYear) {
        errorMessage[index].innerText = valid[index];
      } else {
        errorMessage[index].innerText = "";
      }
      break;

    default:
      console.log("can't be checked");
  }
}

// click event to the output button
getOutput.addEventListener("click", (e) => {
  e.preventDefault();

  // scaning the input field
  for (let i = 0; i < inputArr.length; i++) {
    // if input field is empty
    if (inputArr[i].value === "") {
      errorMessage[i].innerText = required;
    }
    // if input field is not empty
    else {
      errorMessage[i].innerText = "";
      // check if given input data is correct
      checkError(inputArr[i].value, i);
    }
  }
});
