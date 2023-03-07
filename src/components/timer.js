import { useState, useEffect } from "react";

function Timer() {
  let time = 40;

  function countdown() {
    if (time === 0) {
      return;
    }
    time = time - 1;

    console.log(time);
  }

  setInterval(countdown, 1000);

  return (
    <>
      <p>{`Time remaining ${time}`}</p>
    </>
  );
}

export default Timer;
