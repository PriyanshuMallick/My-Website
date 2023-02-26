let hourElement;
let minuteElement;
let dateElement;

document.addEventListener("DOMContentLoaded", () => {
  hourElement = document.getElementById("hour");

  minuteElement = document.getElementById("minute");
  dateElement = document.getElementById("date");
});

const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
const now = new Date();

export function updateTime() {
  console.log("updateTime");
  now.setTime(Date.now());

  const hour = now.getHours();
  const minute = now.getMinutes();
  const date = now.getDate();
  const month = now.getMonth() + 1; // Note: January is 0
  const day = now.getDay(); // Note: Sunday is 0

  const nHour =
    hour == 0 ? "12" : hour % 12 < 10 ? `0${hour % 12}` : `${hour % 12}`;
  const nMinute = minute < 10 ? `0${minute}` : `${minute}`;
  const nDate =
    `${date < 10 ? "0" + date : date}/` +
    `${month < 10 ? "0" + month : month}` +
    ` ${days[day]}`;

  if (hourElement && hourElement.textContent != nHour) {
    hourElement.textContent = nHour;
  }
  if (minuteElement && minuteElement.textContent != nMinute) {
    minuteElement.textContent = nMinute;
  }
  if (dateElement && dateElement.textContent != nDate) {
    dateElement.textContent = nDate;
  }
}
