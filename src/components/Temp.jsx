import React, { useState } from "react";

const Temp = ({ min = 0, sec = 10 }) => {
  let mins = min;
  let secs = sec;
  const [isstart, setisstart] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [time, setTime] = useState(
    `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`
  );
  const start = () => {
    setisstart(true);
    const id = setInterval(() => {
      console.log("a");
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(id);
          setisstart(false);
        } else {
          mins--;
          secs = 59;
        }
      } else {
        secs--;
      }
      setTime(
        `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`
      );
    }, 1000);
    setIntervalId(id)
  };

  return (
    <div className="h-full flex justify-center items-center flex-col">
      <div className="text-center text-9xl ">{time}</div>
      <div className="text-xl">
        <button
          onClick={start}
          className="px-10 py-2 drop-shadow-lg my-10 rounded-full bg-[#C689C6]  transition-all hover:bg-[#C7B200] duration-300"
        >
          start
        </button>
        <button onClick={() => clearInterval(intervalId)}>a</button>
      </div>
    </div>
  );
};

export default Temp;
