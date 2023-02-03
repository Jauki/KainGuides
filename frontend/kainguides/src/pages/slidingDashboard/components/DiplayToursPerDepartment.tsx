import React, {useContext, useEffect} from "react";
import { DepartmentEnum } from "../../../common/departments";
import ReactECharts from "echarts-for-react"
import DepartmentName from "./DepartmentName";
import { displayDept, GuideContext } from "../../../setup/contextManager/GuideProvider";


const DisplayToursPerDepartment = () => {

    const guideContext = useContext(GuideContext)

    // const colorPalette = ['#151a6b', '#dec92a', '#a6262a', '#187d19']
    const colorPalette = ['#2c064d', '#552b7a', '#9171ad', '#d2c1e0']


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
        data: guideContext?.toursPerDepartment
      }
    ]
  };

    useEffect(() => {
      guideContext?.getToursPerDepartment()
      console.log()
    }, [])


    return(
        <div className="w-full h-full">
            <div className="text-4xl py-2">Tours per Department</div>
            <div className="text-xl py-2">Number of tours today</div>
            
            <div className="flex w-full h-full">
              <div className="w-1/2 h-3/4 relative">
                  <ReactECharts option={option} style={{height : "100%", width : "100%"}}/>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                  font-bold text-6xl">
                    {guideContext?.toursPerDepartment.map(t => t.value).reduce((partialSum, a) => partialSum + a, 0)}
                  </div>
              </div>
              <div className="flex flex-col gap-6 mt-32">
                {Object.values(DepartmentEnum).map((value, index) => <DepartmentName name={value} color={colorPalette[index]}/>)}
              </div>
            </div>
        </div>
    )
}

export default DisplayToursPerDepartment;