import React from "react";

function Plan({
  changeTime,
  blurTime,
  prepTime,
  workTime,
  restTime,
  changeRounds,
  blurRounds,
  rounds,
  cooldown,
  totalTime,
}) {
  return (
    <>
      <form>
        <p>Prep</p>
        <input
          type="text"
          name="prep-time-minutes"
          id="setPrepTime"
          onChange={changeTime}
          onBlur={blurTime}
          value={prepTime}
        ></input>
      </form>
      <form>
        <p>Work</p>
        <input
          type="text"
          name="work-time-minutes"
          id="setWorkTime"
          onChange={changeTime}
          onBlur={blurTime}
          value={workTime}
        ></input>
      </form>
      <form>
        <p>Rest</p>
        <input
          type="text"
          name="rest-time-minutes"
          id="setRestTime"
          onChange={changeTime}
          onBlur={blurTime}
          value={restTime}
        ></input>
      </form>
      <form>
        <p>Rounds</p>
        <input
          type="number"
          name="rounds-number"
          onChange={changeRounds}
          onBlur={blurRounds}
          value={rounds}
        ></input>
      </form>
      <form>
        <p>Cool Down</p>
        <input
          type="text"
          name="cooldown-time-minutes"
          id="setCooldown"
          onChange={changeTime}
          onBlur={blurTime}
          value={cooldown}
        ></input>
      </form>
      <p>Total</p>
      <p>{totalTime}</p>
    </>
  );
}

export default Plan;
