import { useState } from 'react';
import stopwatch from './logos/stopwatch-1.png'
import './App.css';
import {getSecondsFromMMSS, toMMSS} from "./helper-functions/time-convert"

function App() {
  const [prepTime, setPrepTime] = useState("00:00");
  const [workTime, setWorkTime] = useState("00:00");
  const [restTime, setRestTime] = useState("00:00");
  const [rounds, setRounds] = useState(1);
  const [cooldown, setCooldown] = useState("00:00");

  const changeTime = (event) => {
    const setTime = eval(event.target.id);
    setTime(event.target.value);
  };
  
  const changeRounds = (event) => {
    setRounds(event.target.value);
  }

  const blurRounds = (event) => {
    if (event.target.value <= 0){
      setRounds(1);
    }
  }

  const blurTime = (event) => {
    const value = event.target.value;
    const seconds = Math.max(0, getSecondsFromMMSS(value));
    const setTime = eval(event.target.id);

    const time = toMMSS(seconds);
    setTime(time);
  };

  return (
    <div className="App">
      <img src={stopwatch} className="App-logo" alt="logo" />
      <h1 className="App-header"> HIT timer </h1>
      <form>
        <p>Prep</p>
        <input type="text" name="prep-time-minutes" id='setPrepTime' onChange={changeTime} onBlur={blurTime} value={prepTime}></input>
      </form>
      <form>
        <p>Work</p>
        <input type="text" name="work-time-minutes" id='setWorkTime' onChange={changeTime} onBlur={blurTime} value={workTime}></input>
      </form>
      <form>
        <p>Rest</p>
        <input type="text" name="rest-time-minutes" id='setRestTime' onChange={changeTime} onBlur={blurTime} value={restTime}></input>
      </form>
      <form>
        <p>Rounds</p>
        <input type="number" name='rounds-number' onChange={changeRounds} onBlur={blurRounds} value={rounds}></input>
      </form>
      <form>
        <p>Cool Down</p>
        <input type="text" name="cooldown-time-minutes" id='setCooldown' onChange={changeTime} onBlur={blurTime} value={cooldown}></input>
      </form>
      <p>Total</p>
      <p>{toMMSS(getSecondsFromMMSS(prepTime) + getSecondsFromMMSS(cooldown) + ((getSecondsFromMMSS(workTime) + getSecondsFromMMSS(restTime)) * rounds))}</p>
    </div>
  );
}

export default App;
