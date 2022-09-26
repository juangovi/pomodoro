import React from 'react'
import Temp from './components/Temp'

export const App = () => {
  return (
    <div className='min-h-screen flex flex-row divide-x bg-[#937DC2]'>
      <div className='basis-1/4 flex-row h-screen overflow-auto'>
        <button className='w-full py-3 text-center bg-[#C689C6]  transition-all hover:bg-[#FFABE1] duration-300'>add task</button>
        <div className='w-full'>
          
        </div>
      </div>
      <div className='basis-3/4'>
        <Temp/>
      </div>
    </div>
  )
}
