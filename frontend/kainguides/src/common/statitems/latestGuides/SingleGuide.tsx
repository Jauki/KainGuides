import React from 'react'

type SingleGuideProps = {
  guide : any
} 

const SingleGuide = ({guide} : SingleGuideProps) => {
  return(
    <div className='w-full flex h-6 my-2 items-center justify-between gap-2'>
      {/* ToDo: find real color */}
      <div className='bg-primary rounded-md h-full w-6'></div>{/* square next to name */}
      <div className='flex flex-grow gap-4'>
        <div>{guide.name.substring(0,14)}</div>
        <div className='text-sm text-informatik py-0 px-1 bg-blueLight rounded-lg'>{guide.dept}</div>
      </div>
      <div>09:42 </div>
    </div>
  )
}

export default SingleGuide;