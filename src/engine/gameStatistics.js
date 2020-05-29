const gameState = {
  totalCountUpCards: 0,
  countClicks: 0,
  stopwatch(elId) {
    let sec = 0;
    let min = 0;
    let hour = 0;
    setInterval(tick, 1000);

    function tick() {
      sec++;
      if (sec === 60) {
        min += 1;
        sec = 0;
      }
      if (min === 60) {
        hour += 1;
        min = 0;
      }

      let sHour = hour < 10 ? `0${hour}` : hour;
      let timeString = `${sHour}:`;
      let sMin = min < 10 ? `0${min}` : min;
      timeString += `${sMin}:`;
      let sSec = sec < 10 ? `0${sec}` : sec;
      timeString += `${sSec}`;

      let timeEl = document.getElementById(elId);
      timeEl.textContent = "Time: " + timeString;
    }
  },
};

export { gameState };
