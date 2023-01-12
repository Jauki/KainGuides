import React from "react";
import Header from "../../../common/Header";
import AvgTimePerTour from "../../../common/statitems/AvgTimePerTour";
import GuidesPerHour from "../../../common/statitems/GuidesPerHour";

const Stats = () => {
    return(
        <div className="w-full h-full flex flex-col">
            <Header headline={"Datatracking Overview"} />
            <div className="grid grid-cols-9 pt-11">
                <AvgTimePerTour avgTime={7} change={10}/>
                <GuidesPerHour />
            </div>
        </div>
    )
}

export default Stats