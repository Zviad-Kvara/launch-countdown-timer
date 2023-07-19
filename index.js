const daysElement = document.querySelector("#day");
const hoursElement = document.querySelector("#hour");
const minutesElement = document.querySelector("#minute");
const secondsElement = document.querySelector("#second");

let countDown = () => {
  let countDate = new Date("July 20,2023 00:00:00").getTime();
  let now = new Date().getTime();
  let gap = countDate - now;

  //time claculation
  let second = 1000;
  let minute = 60 * second;
  let hour = 60 * minute;
  let day = 24 * hour;

  //counting date
  const countDays = Math.floor(gap / day);
  const countHours = Math.floor((gap % day) / hour);
  const countMinutes = Math.floor((gap % hour) / minute);
  const countSeconds = Math.floor((gap % minute) / second);
  // changing dates innerText
  daysElement.innerText = countDays;
  hoursElement.innerText = countHours;
  minutesElement.innerText = countMinutes;
  secondsElement.innerText = countSeconds;
// when time ends
  if (
    countDays === 0 &&
    countHours === 0 &&
    countMinutes === 0 &&
    countSeconds === 0
  ) {
    clearInterval(interval);
    console.log("EXPIRED");
  }
};
// setting interval to countDown
let interval = setInterval(countDown, 1000);
