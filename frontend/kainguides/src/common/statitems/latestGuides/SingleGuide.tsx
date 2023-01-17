import React from 'react'

type SingleGuideProps = {
  guide : any
} 

const SingleGuide = ({guide} : SingleGuideProps) => {
  return(
    <div className='w-full flex h-6 my-2 items-center justify-between gap-2'>
      {/* ToDo: find real color */}
      <div className='bg-primary rounded-md h-full w-6'></div>{/* square next to name */}
      <div className='flex flex-grow justify-between pr-4'>
        <div>
          {
          (guide.firstname.length + guide.lastname.length >= 15) 
            ? guide.firstname + " " + guide.lastname.substring(0,1) + "." 
            : guide.firstname + " " + guide.lastname
          }
        </div>
        <div className='text-sm text-informatik py-0 px-1 bg-blueLight rounded-lg'>{guide.dept}</div>
      </div>
      <div>09:42 </div>
    </div>
  )
}

export default SingleGuide;