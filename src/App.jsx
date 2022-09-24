import React from 'react'
import Temp from './components/Temp'

export const App = () => {
  return (
    <div className='flex flex-row'>
      <div className='basis-1/4'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet laboriosam unde veniam suscipit dolorem nisi expedita magni reprehenderit hic deserunt, maxime quos dolore esse culpa dolor illum dolores. Dicta omnis qui nulla. Ex optio at aliquid labore voluptatibus eligendi fuga!
      </div>
      <div className='basis-3/4'>
        <Temp/>
      </div>
    </div>
  )
}
