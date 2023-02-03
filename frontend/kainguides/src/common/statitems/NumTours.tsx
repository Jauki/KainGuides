import React from 'react'

type NumToursProps = {
  allTours : number,
  currTours : number
}

const NumTours = ({allTours, currTours} : NumToursProps) => {
  return(
    <div className='flex gap-12 items-center'>
      <div className='flex flex-col gap-2'>
        <h1>Tours</h1>
        <div className='text-6xl font-bold'>
          {allTours}
        </div>
      </div>
      <div>
        <h1>Current</h1>
        <div className='text-6xl font-bold'>
          {currTours}
        </div>
      </div>
    </div>
  )
}

export default NumTours;