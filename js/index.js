function getCurrentDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  return dayOfWeek;
}

function getCurrentUTCTime() {
  const currentDate = new Date();
  const utcTime = currentDate.toUTCString();
  return utcTime;
}

function updateCurrentDayAndTime() {
  const dayOfWeekElement = document.getElementById("currentDay");
  const utcTimeElement = document.getElementById("currentUtc");

  const currentDay = getCurrentDayOfWeek();
  const currentUtc = getCurrentUTCTime();

  dayOfWeekElement.textContent = `${currentDay}`;
  utcTimeElement.textContent = ` ${currentUtc}`;
}

setInterval(updateCurrentDayAndTime, 1000);
