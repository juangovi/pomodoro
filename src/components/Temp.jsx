import React, { useState } from "react";

const Temp = () => {
  let mins = 2;
  let secs = 0;
  const [isstart, setisstart] = useState(false);
  const [time, setTime] = useState(
    `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`
  );
  const [intervalId, setIntervalId] = useState(0);
  const run = () => {
    if (mins > 0 || secs > 0) {
      if (secs == 0) {
        secs = 59;
        mins--;
      } else {
        secs--;
      }
      setTime(
        `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`
      );
    } else {
      clearInterval(intervalId);
    }
  };
  const start = () => {
    if (!isstart) {
      run();
      setIntervalId(setInterval(run, 1000));
    }
  };
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="text-center text-9xl">{time}</div>
      <div className="text-xl">
        <button
          onClick={start}
          className="px-5 py-2 rounded-full bg-blue-400  transition-all hover:bg-pink-500 duration-300"
        >
          start
        </button>
      </div>
    </div>
  );
};

export default Temp;
