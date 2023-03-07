import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        return;
      }
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <p>{`Time remaining ${time}`}</p>
    </>
  );
}

export default Timer;
