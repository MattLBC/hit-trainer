import { useState } from 'react';
import stopwatch from './logos/stopwatch-1.png'
import './App.css';

function App() {
  const [prepTime, setPrepTime] = useState("00:00");

  const onChange = (event) => {
    setPrepTime(event.target.prepTime);
  };

  const onBlur = (event) => {
    const value = event.target.value;
    const seconds = Math.max(0, getSecondsFromMMSS(value));

    const time = toMMSS(seconds);
    setPrepTime(time);
  };

  const getSecondsFromMMSS = (value) => {
    const [str1, str2] = value.split(":");

    const val1 = Number(str1);
    const val2 = Number(str2);

    if (!isNaN(val1) && isNaN(val2)) {
      return val1;
    }

    if (!isNaN(val1) && !isNaN(val2)) {
      return val1 * 60 + val2;
    }
    return 0;
  };

  const toMMSS = (secs) => {
    const secNum = parseInt(secs.toString(), 10);
    const minutes = Math.floor(secNum / 60);
    const seconds = secNum % 60;

    return [minutes, seconds]
      .map((val) => (val < 10 ? `0${val}` : val))
      .filter((val, index) => val !== "00" || index > 0)
      .join(":")
      .replace(/^0/, "");
  };

  return (
    <div className="App">
      <img src={stopwatch} className="App-logo" alt="logo" />
      <h1 className="App-header"> HIT timer </h1>
      <form>
        <p>Prep</p>
        <input type="text" name="prep-time-minutes" onChange={onChange} onBlur={onBlur} value={prepTime}></input>
      </form>
      <p>Work</p>
      <p>Rest</p>
      <p>Rounds</p>
      <p>Cool Down</p>
      <p>Total</p>
    </div>
  );
}

export default App;
