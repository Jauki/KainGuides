import React, {useContext, useEffect} from "react";
import ReactECharts from "echarts-for-react"
import EChartsReact from "echarts-for-react";
import * as echarts from 'echarts';
import { GuideContext } from "../../setup/contextManager/GuideProvider";

const GuidesPerHour = () => {

    const guideContext = useContext(GuideContext)

    useEffect(() => {
        console.log(guideContext)
    }, [])

    const option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: guideContext?.toursPerHourList.map(item => item.hour),
            show: false
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
            data: guideContext?.toursPerHourList.map(item => item.tours),
            type: 'line',
            label : {
                normal:{
                    show: true,
                    textStyle: {
                        fontWeight: 'bold',
                        fontSize : 20
                    }
                }
            },
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "#7F56D9"
                  },
                  {
                    offset: 1,
                    color: "#e4d9fa"
                  }
                ])
            },
            
            }
        ]
    };


    return (
        <div className="font-medium">
            <div className="px-4 pt-4">Guides Per Hour</div>
            <div className="w-full mt-4">
               <ReactECharts option={option} />
            </div>
        </div>
    )
}

export default GuidesPerHour