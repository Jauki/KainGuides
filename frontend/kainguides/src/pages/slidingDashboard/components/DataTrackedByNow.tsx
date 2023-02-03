import React from "react";
import AvailableGuides from "../../../common/statitems/AvailableGuides";
import AvgTimePerTour from "../../../common/statitems/AvgTimePerTour";
import NumTours from "../../../common/statitems/NumTours";
import Utilization from "../../../common/statitems/Utilization";

const DataTrackedByNow = () => {
    return (
        <div className="w-full h-full">
            <div className="text-4xl py-2">Data tracked so far</div>
            <div className="text-xl py-2">Daten des Tages der offenen Tür</div>
            <div className="grid grid-cols-9 gap-8 py-16 px-4">
                <div className="col-span-3">
                    <AvgTimePerTour avgTime={7} change={10}/>
                </div>
                <div className="col-span-3">
                    <Utilization percentage={66} />
                </div>
                <div className="col-span-3 row-start-2">
                    <NumTours allTours={299} currTours={10}/>
                </div>
                <div className="col-span-3 row-start-2">
                    <AvailableGuides numGuides={4}/>
                </div>

            </div>
        </div>
    )
}

export default DataTrackedByNow;