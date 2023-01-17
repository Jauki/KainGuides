import React from 'react'
import { PieChart } from 'recharts';
import { DepartmentEnum } from '../departments';

const ToursPerDepartment = () => {

  type toursPerDept = {
    dept: DepartmentEnum,
    tours: number
  }
  const data : Array<toursPerDept> = [
    {
      dept: DepartmentEnum.Informatik,
      tours: 22
    },
    {
      dept: DepartmentEnum.Mechatronik,
      tours: 12
    },
    {
      dept: DepartmentEnum.Automatisierung,
      tours: 42
    },
    {
      dept: DepartmentEnum.Robotik,
      tours: 6
    },
  ]

  return (
    <div className='w-full h-full bg-gray-50 border border-gray-100 rounded-2xl p-6'>
      <div className='flex flex-col gap-2'>
        <div className='font-semibold'>Tours per department</div>
        <div className='text-gray-400'>View departments with most tours</div>
      </div>
      <div>
        <PieChart data={data} width={185} height={185}>

        </PieChart>
      </div>
    </div>
  )
}

export default ToursPerDepartment;