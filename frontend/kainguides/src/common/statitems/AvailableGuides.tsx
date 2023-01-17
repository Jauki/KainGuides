import React from 'react'

type AvailableGuidesProps = {
  numGuides : number
}

const AvailableGuides = ({numGuides} : AvailableGuidesProps) => {
  return(
    <div className='flex flex-col p-2 gap-2'>
      <h1>Available Guides</h1>
      <div className='text-4xl font-bold'>{numGuides} Guides</div>
    </div>
  )
}

export default AvailableGuides;