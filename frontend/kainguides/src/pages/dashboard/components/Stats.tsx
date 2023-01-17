import React, {FunctionComponent} from "react";
import { EnumDeclaration } from "typescript";
import { DepartmentEnum } from "../../../common/departments";
import Header from "../../../common/Header";
import AvgTimePerTour from "../../../common/statitems/AvgTimePerTour";
import GuidesPerHour from "../../../common/statitems/GuidesPerHour";
import LatestGuidesList from "../../../common/statitems/latestGuides/LatestGuidesList";
import NumTours from "../../../common/statitems/NumTours";
import ToursPerDepartment from "../../../common/statitems/ToursPerDepartment";
import Utilization from "../../../common/statitems/Utilization";

const guides : Array<{firstname: string,lastname: string, dept: DepartmentEnum}> = [
    {
        firstname: "elias",
        lastname: "Halbauer",
        dept: DepartmentEnum.Informatik,
    },
    {
        firstname: "elias",
        lastname: "Halbauerasdasdasd",
        dept: DepartmentEnum.Informatik,
    },{
        firstname: "elias",
        lastname: "Halbauer",
        dept: DepartmentEnum.Informatik,
    },{
        firstname: "elias",
        lastname: "Halbauer",
        dept: DepartmentEnum.Informatik,
    },{
        firstname: "elias",
        lastname: "Halbauer",
        dept: DepartmentEnum.Informatik,
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
                <div className="col-span-3 row-start-5 row-span-2 pr-6">
                    <LatestGuidesList latestGuidesList={guides}/>
                </div>
                <div className="col-span-4 row-span-3">
                    <ToursPerDepartment />
                </div>
            </div>
        </div>
    )
}

export default Stats