import React, {useState} from "react"
import {ArrowDownIcon, ArrowUpIcon} from "@heroicons/react/24/outline"

type AvgTimePerTourProps = {
    avgTime : number,
    change? : number
}

const AvgTimePerTour = ({avgTime, change} : AvgTimePerTourProps) => {

    const greenStyle = {
        color: '#12B76A',
        background: '#ECFDF3'
    }

    const redStyle = {
        color: '#FF2222',
        background: '#FFBBBB'
    }

    return (
        <div className="col-span-3 row-span-1">
            <h1>Average time per tour:</h1>
            <div className="text-5xl font-bold">
                <div className="relative inline-block mt-4">
                    {avgTime} mins
                    {change != null ? 
                        <div className="text-sm absolute -top-1 -right-12 px-0.5 py-0.25 
                                      bg-success50 flex items-center rounded-md font-medium
                                        text-success500" style={change > 0 ? greenStyle : redStyle}>
                            {change > 0 ? <ArrowUpIcon className="h-3 w-3 font-semibold mr-0.5"/> : <ArrowDownIcon className="h-3 w-3 font-medium mr-0.5"/>}{change}%
                        </div>
                        :
                        <></>
                    }   
                </div>
            </div>
        </div>
    )
}

export default AvgTimePerTour