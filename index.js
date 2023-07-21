const daysElement = document.querySelector("#day");
const hoursElement = document.querySelector("#hour");
const minutesElement = document.querySelector("#minute");
const secondsElement = document.querySelector("#second");

let countDown = () => {
  // 1.calculate date
  let countDate = new Date("July 21,2023 20:50:50").getTime();
  let now = new Date().getTime();
  let gap = countDate - now;

  //2.time claculation in miliseconds for each element
  let second = 1000;
  let minute = 60 * second;
  let hour = 60 * minute;
  let day = 24 * hour;

  //3.counting date in miliseconds
  const countDays = Math.floor(gap / day);
  const countHours = Math.floor((gap % day) / hour);
  const countMinutes = Math.floor((gap % hour) / minute);
  const countSeconds = Math.floor((gap % minute) / second);

  // 4.changing dates innerText
  daysElement.innerText = countDays;
  hoursElement.innerText = countHours;
  minutesElement.innerText = countMinutes;
  secondsElement.innerText = countSeconds;
  // 5.when time ends date will become 0
  if (
    countDays <= 0 &&
    countHours <= 0 &&
    countMinutes <= 0 &&
    countSeconds <= 0
  ) {
    clearInterval(interval);
    daysElement.innerText = 0;
    hoursElement.innerText = 0;
    minutesElement.innerText = 0;
    secondsElement.innerText = 0;
  }
};
// set interval to countDown
let interval = setInterval(countDown, 1000);
