import React, {FunctionComponent} from "react";
import { EnumDeclaration } from "typescript";
import { DepartmentEnum } from "../../../common/departments";
import Header from "../../../common/Header";
import AvgTimePerTour from "../../../common/statitems/AvgTimePerTour";
import GuidesPerHour from "../../../common/statitems/GuidesPerHour";
import LatestGuidesList from "../../../common/statitems/latestGuides/LatestGuidesList";
import NumTours from "../../../common/statitems/NumTours";
import Utilization from "../../../common/statitems/Utilization";

const guides : Array<{name: string, dept: DepartmentEnum}> = [
    {
        name: "elias Halbauer",
        dept: DepartmentEnum.Informatik,
    },
    {
        name: "elias Halbauer",
        dept: DepartmentEnum.Automatisierung,
    },
    {
        name: "elias Halbauer",
        dept: DepartmentEnum.Mechatronik,
    },
    {
        name: "elias Halbauer",
        dept: DepartmentEnum.Mechatronik,
    },
    {
        name: "elias Halbauer",
        dept: DepartmentEnum.Mechatronik,
    },
]

const Stats : FunctionComponent = () => {
    return(
        <div className="w-full h-full flex flex-col">
            <Header headline={"Datatracking Overview"} />
            <div className="grid grid-cols-9 h-full pt-11 grid-rows-6 gap-y-6">
                <AvgTimePerTour avgTime={7} change={10}/>
                <GuidesPerHour />
                <Utilization percentage={66}/>
                <NumTours allTours={256} currTours={7} />
                <div className="col-span-3 row-start-5 row-span-2">
                    <LatestGuidesList latestGuidesList={guides}/>
                </div>
            </div>
        </div>
    )
}

export default Stats