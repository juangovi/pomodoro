import React, { useState } from "react";
import "boxicons";
export const Menu = () => {
  const [lista, setlista] = useState([
    {
      title: "ojo",
      time: {
        min: 10,
        sec: 30,
      },
      resttime: {
        min: 10,
        sec: 30,
      },
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugiat?",
      time: {
        min: 10,
        sec: 30,
      },
      resttime: {
        min: 10,
        sec: 30,
      },
    },
  ]);
  return (
    <>
      <button className="w-full py-3 text-center bg-[#C689C6]  transition-all hover:bg-[#FFABE1] duration-300">
        add task
      </button>
      <div className="w-full divide-y-2 ">
        {lista.map((pomodoro) => {
          return (
            <div className="flex flex-row cursor-pointer">
              <div
                key={pomodoro.title}
                className="basis-4/5 overflow-hidden h-11 transition-all hover:h-24 duration-500"
              >
                <div className="text-xl w-auto text-center py-2 h-10 uppercase font-medium ml-3">
                  <div className="truncate">{pomodoro.title}</div>
                </div>
                <div className="text-center m-auto">
                  <div>
                    <box-icon size="xs" name="time-five"></box-icon>
                    {pomodoro.time.min}:{pomodoro.time.sec}
                  </div>
                  <div>
                    <box-icon size="xs" type="solid" name="time-five"></box-icon>
                    {pomodoro.time.min}:{pomodoro.time.sec}
                  </div>
                </div>
              </div>
              <div className="basis-1/5 m-auto">
                <box-icon name="play-circle"></box-icon>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
