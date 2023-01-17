import React from 'react'

type DayProps = {
  day: Date
}

const Day = ({day} : DayProps) => {

  return(
    <div className='flex flex-col justify-end h-full'>
      <h1>Day</h1>
      <div className='font-bold text-3xl'>{day.toLocaleDateString("de", {weekday: 'long', day: '2-digit', month:'short'})}</div>
    </div>
  )
}

export default Day;