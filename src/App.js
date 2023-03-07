import { useState } from "react";
import stopwatch from "./logos/stopwatch-1.png";
import "./App.css";
import { getSecondsFromMMSS, toMMSS } from "./helper-functions/time-convert";
import Plan from "./components/plan";

function App() {
  const [prepTime, setPrepTime] = useState("00:00");
  const [workTime, setWorkTime] = useState("00:00");
  const [restTime, setRestTime] = useState("00:00");
  const [rounds, setRounds] = useState(1);
  const [cooldown, setCooldown] = useState("00:00");
  const totalTime = toMMSS(
    getSecondsFromMMSS(prepTime) +
      getSecondsFromMMSS(cooldown) +
      (getSecondsFromMMSS(workTime) + getSecondsFromMMSS(restTime)) * rounds
  );
  const [start, setStart] = useState(false);

  const changeTime = (event) => {
    const setTime = eval(event.target.id);
    setTime(event.target.value);
  };

  const changeRounds = (event) => {
    setRounds(event.target.value);
  };

  const blurRounds = (event) => {
    if (event.target.value <= 0) {
      setRounds(1);
    }
  };

  const blurTime = (event) => {
    const value = event.target.value;
    const seconds = Math.max(0, getSecondsFromMMSS(value));
    const setTime = eval(event.target.id);

    const time = toMMSS(seconds);
    setTime(time);
  };

  function startButton() {
    setStart(!start);
    console.log(start);
  }

  return (
    <div className="App">
      <img src={stopwatch} className="App-logo" alt="logo" />
      <h1 className="App-header"> HIT timer </h1>
      {start ? null : (
        <Plan
          changeTime={changeTime}
          blurTime={blurTime}
          prepTime={prepTime}
          workTime={workTime}
          restTime={restTime}
          changeRounds={changeRounds}
          blurRounds={blurRounds}
          rounds={rounds}
          cooldown={cooldown}
        />
      )}
      <p>Total</p>
      <p>{totalTime}</p>
      <button onClick={startButton}>Start</button>
    </div>
  );
}

export default App;
