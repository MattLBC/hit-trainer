import { useState, useEffect } from "react";
import { getSecondsFromMMSS, toMMSS } from "../helper-functions/time-convert";

function Timer({
  prepTime,
  workTime,
  restTime,
  rounds,
  cooldown,
  totalTime,
  setStart,
  start,
  setShowCompleteModal
}) {
  const [time, setTime] = useState(getSecondsFromMMSS(totalTime));
  const [phase, setPhase] = useState("Get ready");
  const [phaseTime, setPhaseTime] = useState(getSecondsFromMMSS(prepTime));
  const [arrayPosition, setArrayPosition] = useState(0);

  const workoutArray = [];
  workoutArray.push(getSecondsFromMMSS(prepTime));
  for (let i = 0; i < rounds; i++) {
    workoutArray.push(getSecondsFromMMSS(workTime));
    workoutArray.push(getSecondsFromMMSS(restTime));
  }
  workoutArray.push(getSecondsFromMMSS(cooldown));

  useEffect(() => {
    const interval = setInterval(() => {
      if (phaseTime === 1) {
        setArrayPosition(arrayPosition + 1);
        setPhaseTime(workoutArray[arrayPosition + 1]);
        return;
      }
      setPhaseTime((phaseTime) => phaseTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [phaseTime]);

  useEffect(() => {
    if (arrayPosition === 0) {
      setPhase("Get ready");
    } else if (arrayPosition === workoutArray.length - 1) {
      setPhase("Cool down");
    } else if (arrayPosition % 2 === 0) {
      setPhase("Rest");
    } else {
      setPhase("Work");
    }
  }, [arrayPosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        return;
      }
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  if (arrayPosition === workoutArray.length) {
    setShowCompleteModal(true)
    setStart(!start)
  }

  return (
    <>
      <p>{phase}</p>
      <p>{toMMSS(phaseTime)}</p>
      <p>Time remaining</p>
      <p>{toMMSS(time)}</p>
    </>
  );
}

export default Timer;
