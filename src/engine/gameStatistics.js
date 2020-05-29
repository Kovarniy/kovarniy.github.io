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
      
      if (hour < 10) hour = "0" + hour;
      if (min < 10) min = "0" + min;
      if (sec < 10) sec = "0" + sec;
      let timeString = hour + ":" + min + ":" + sec;

      let timeEl = document.getElementById(elId);
      timeEl.textContent = "Time: " + timeString;
    }
  },
};

export { gameState };
