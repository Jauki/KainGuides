import React from 'react'
import { PieChart } from 'recharts';
import { DepartmentEnum } from '../departments';
import ReactECharts from "echarts-for-react"

const ToursPerDepartment = () => {

  type toursPerDept = {
    dept: DepartmentEnum,
    value: number
  }
  
  const data : Array<toursPerDept> = [
    {
      dept: DepartmentEnum.Informatik,
      value: 22
    },
    {
      dept: DepartmentEnum.Mechatronik,
      value: 12
    },
    {
      dept: DepartmentEnum.Automatisierung,
      value: 42
    },
    {
      dept: DepartmentEnum.Robotik,
      value: 6
    },
  ]

  const colorPalette = ['#6941C6', '#7F56D9', '#9E77ED', '#F4EBFF']

const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Tours',
        type: 'pie',
        radius: ['40%', '70%'],
        color: colorPalette,
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ]
  };
  
  return (
    <div className='w-full h-full bg-gray-50 border border-gray-100 rounded-2xl p-6'>
      <div className='flex flex-col gap-2'>
        <div className='font-semibold'>Tours per department</div>
        <div className='text-gray-400'>View departments with most tours</div>
      </div>
      <div className='w-full h-2 grid'>
        <ReactECharts option={option} className=""/>
      </div>
    </div>
  )
}

export default ToursPerDepartment;