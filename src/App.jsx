import React, { useState } from 'react'
import Temp from './components/Temp'

export const App = () => {
  const [lista, setlista] = useState([{
    title: "ojo",
    time: {
      min: 10,
      sec: 30
    },
    resttime: {
      min: 10,
      sec: 30
    }
  },
  {
    title: "ojo",
    time: {
      min: 10,
      sec: 30
    },
    resttime: {
      min: 10,
      sec: 30
    }
  }])
  return (
    <div className='min-h-screen flex flex-row divide-x bg-[#937DC2]'>
      <div className='basis-1/4 flex-row h-screen overflow-auto'>
        <button className='w-full py-3 text-center bg-[#C689C6]  transition-all hover:bg-[#FFABE1] duration-300'>add task</button>
        <div className='w-full divide-y-2 '>
          {
            lista.map((pomodoro) => {
              return (
                <div className='flex-row overflow-hidden h-6 transition-all hover:h-12 duration-500'>
                  <div>{pomodoro.title}</div><div>{pomodoro.time.min}:{pomodoro.time.sec}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='basis-3/4'>
        <Temp/>
      </div>
    </div>
  )
}
