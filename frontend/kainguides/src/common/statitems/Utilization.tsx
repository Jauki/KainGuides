import React from 'react'

type UtilizationProps = {
  percentage: number
}

const Utilization = ({percentage} : UtilizationProps) => {

  const barWidth = {
    width: percentage + "%"
  }

  return(
    <>
      <div className='flex justify-between'>
        <h1>Utilization</h1>
        <h1 className='font-bold'>{percentage}%</h1>
      </div>
        <div className='w-full h-6 bg-primary50 rounded-full'>
          <div className='bg-primary rounded-full h-full' style={barWidth}></div>
        </div>
    </>
  )
}

export default Utilization;
