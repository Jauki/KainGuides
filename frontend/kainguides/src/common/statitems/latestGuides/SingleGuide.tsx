import React from 'react'
import { GuideType } from '../../../pages/guidelist/GuideTypes'
import Department from '../../Department'

type SingleGuideProps = {
  guide : GuideType
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
          <Department dept={guide.dept}/>
      </div>
      <div>09:42 </div>
    </div>
  )
}

export default SingleGuide;