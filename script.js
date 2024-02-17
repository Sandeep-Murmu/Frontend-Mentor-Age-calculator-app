// individual inputs
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

const getOutput = document.getElementById("get-output"); //output button
const inputArr = document.querySelectorAll(".date-input"); //arr of inputs
const errorMessage = document.querySelectorAll(".err-msg"); //arr of error message below input field

const displayDay = document.querySelector(".daySpan");
const displayMonth = document.querySelector(".monthSpan");
const displayYear = document.querySelector(".yearSpan");

let boolDay = false;
let boolMonth = false;
let boolYear = false;
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

// function for checking the validation of input field
function checkError(inp, index) {
  switch (index) {
    case 0:
      if (inp >= 31 || inp < 1) {
        errorMessage[index].innerText = valid[index];
        boolDay = false;
      } else {
        errorMessage[index].innerText = "";
        boolDay = true;
      }
      break;

    case 1:
      if (inp > 12 || inp < 1) {
        errorMessage[index].innerText = valid[index];
        boolMonth = false;
      } else {
        errorMessage[index].innerText = "";
        boolMonth = true;
      }
      break;

    case 2:
      if (inp > currYear) {
        errorMessage[index].innerText = valid[index];
        boolYear = false;
      } else {
        errorMessage[index].innerText = "";
        boolYear = true;
      }
      break;

    default:
      console.log("can't be checked");
  }
}

function calculateAge(d, m, y) {
  let daysInMonth = 30;
  // check no of days in month
  if (currMonth - 1 <= 7) {
    if ((currMonth - 1) % 2 == 0) {
      daysInMonth = 30;
      //for february month
      if (currMonth - 1 == 2) {
        // for leap year
        if (y % 4 == 0) {
          daysInMonth = 29;
        } else {
          daysInMonth = 28;
        }
      }
    } else {
      daysInMonth = 31;
    }
  } else if (currMonth - 1 >= 8) {
    if ((currMonth - 1) % 2 == 0) {
      daysInMonth = 31;
    } else {
      daysInMonth = 30;
    }
  }

  if (currMonth < m) {
    currYear -= 1;
    currMonth += 12;
  }
  if (today < d) {
    currMonth -= 1;
    today += daysInMonth;
  }

  let fyear = currYear - y;
  let fmonth = currMonth - m;
  let fday = today - d;

  displayYear.innerText = fyear;
  displayMonth.innerText = fmonth;
  displayDay.innerText = fday;
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

  if (boolDay && boolMonth && boolYear) {
    calculateAge(inputDay.value, inputMonth.value, inputYear.value);
  } else if (!(boolDay && boolMonth && boolYear)) {
    console.log("no");
  }
});
