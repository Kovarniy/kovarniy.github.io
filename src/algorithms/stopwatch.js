class Stopwatch {
  constructor() {
    this.sec = this.min = this.hour = 0;
  }

  reset() {
    this.sec = this.min = this.hour = 0;
  }

  tick(obj) {
    obj.sec++;
    if (obj.sec === 60) {
      obj.min += 1;
      obj.sec = 0;
    }
    if (obj.min === 60) {
      obj.hour += 1;
      obj.min = 0;
    }
    if (obj.hour === 24) {
      obj.hour = obj.msin = obj.sec = 0;
    }
  }

  start() {
    this.timerId = setInterval(this.tick, 1000, this);
  }

  stop() {
    clearInterval(this.timerId);
  }

  get currentTime() {
    let sHour = this.hour < 10 ? `0${this.hour}` : this.hour;
    let timeString = `${sHour}:`;
    let sMin = this.min < 10 ? `0${this.min}` : this.min;
    timeString += `${sMin}:`;
    let sSec = this.sec < 10 ? `0${this.sec}` : this.sec;
    timeString += `${sSec}`;
    return timeString;
  }
}

class RenderingStopwatch extends Stopwatch {
  constructor(elId) {
    super();
    this.elId = elId;
  }

  tick(obj) {
    super.tick(obj);
    let timeEl = document.getElementById(obj.elId);
    timeEl.innerHTML = "<b>Time:</b> " + obj.currentTime;
  }
}

export { Stopwatch, RenderingStopwatch };
