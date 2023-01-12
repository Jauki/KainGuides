import React from "react";
import {LineChart, Line, ResponsiveContainer, AreaChart, XAxis, YAxis, Area} from 'recharts'

const GuidesPerHour = () => {

    const data = [
        {time: 1, guides : 6},
        {time: 2, guides : 7},
        {time: 3, guides : 3},
        {time: 4, guides : 12},
        {time: 5, guides : 14},
    ]

    return (
        <div className="col-span-6 bg-gray-50 border border-gray-100 rounded-2xl p-6 font-medium">
            <div>Guides Per Hour</div>
            <div className="w-full mt-10">
                <AreaChart data={data} width={693} height={186}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7F56D9" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#7F56D9" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="time" />
                    {/* <YAxis dataKey="guides" /> */}
                    <YAxis />
                    <Area type="monotone" dataKey="guides" stroke="#7F56D9" fillOpacity={1} fill="url(#colorUv)" strokeWidth={3}/>
                </AreaChart>
            </div>
        </div>
    )
}

export default GuidesPerHour