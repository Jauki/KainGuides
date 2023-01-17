import React from "react";
import ReactECharts from "echarts-for-react"

const GuidesPerHour = () => {

    const data = [
        {time: 1, guides : 6},
        {time: 2, guides : 7},
        {time: 3, guides : 3},
        {time: 4, guides : 12},
        {time: 5, guides : 14},
    ]

    const option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [1,2,3,4,5]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [6,7,3,12,14],
            type: 'line',
            smooth: true,
            areaStyle: {
                color: '#FFFF22'
            }
            }
        ]
    };


    return (
        <div className="col-span-6 bg-gray-50 border border-gray-100 rounded-2xl p-6 font-medium row-span-3">
            <div>Guides Per Hour</div>
            <div className="w-full mt-10">
               <ReactECharts option={option} />
            </div>
        </div>
    )
}

export default GuidesPerHour