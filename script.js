// individual inputs
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

const getOutput = document.getElementById("get-output"); //output button
const inputArr = document.querySelectorAll(".date-input");  //arr of inputs
const errorMessage = document.querySelectorAll(".err-msg"); //error message below input field

// for date
// let date = new Date();
// let today = date.getDate();
// let currMonth = date.getMonth() + 1;
// let currYear = date.getFullYear();

// console.log("today: " + today);
// console.log(typeof today);

// console.log("month: " + currMonth);
// console.log(typeof currMonth);

// console.log("year: " + currYear);
// console.log(typeof currYear);

const required = "This field is required";
const valid = [
  "Must be a valid day",
  "Must be a valid month",
  "Must be in the past",
];

// main functionality (wop)
getOutput.addEventListener("click", (e) => {
  e.preventDefault();
  inputArr.forEach((i) => {
    if (i.value === NaN) {
      console.log(required);
    } else {
      //   console.log(i.value);
      console.log(valid[0]);
    }
  });
});
