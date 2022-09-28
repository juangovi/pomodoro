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
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugiat?",
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
            <div key={pomodoro.title} className="flex-row overflow-hidden h-11 transition-all hover:h-20 duration-500">
              <div className="text-xl text-center py-2 h-10 uppercase font-medium truncate ... mx-4">
                {pomodoro.title}
              </div>
              <div className="text-center">
                <box-icon size="xs" name="time-five"></box-icon>
                <span className="">{pomodoro.time.min}:{pomodoro.time.sec}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
