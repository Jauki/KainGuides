import React, {FunctionComponent} from "react";
import { DepartmentEnum } from "../../../common/departments";
import Header from "../../../common/Header";
import AvailableGuides from "../../../common/statitems/AvailableGuides";
import AvgTimePerTour from "../../../common/statitems/AvgTimePerTour";
import Day from "../../../common/statitems/Day";
import GuidesPerHour from "../../../common/statitems/GuidesPerHour";
import LatestGuidesList from "../../../common/statitems/latestGuides/LatestGuidesList";
import NumTours from "../../../common/statitems/NumTours";
import ToursPerDepartment from "../../../common/statitems/ToursPerDepartment";
import Utilization from "../../../common/statitems/Utilization";
import { GuideType } from "../../guidelist/GuideTypes";

const guides : Array<GuideType> = [
    {
        first_name: "elias",
        last_name: "Halbauer",
        department: DepartmentEnum.Informatik,
        school_class: "5CHIF"
    },
    {
        first_name: "elias",
        last_name: "Halbauer",
        department: DepartmentEnum.Informatik,
        school_class: "5CHIF"
    },
    {
        first_name: "elias",
        last_name: "Halbauer",
        department: DepartmentEnum.Informatik,
        school_class: "5CHIF"
    },
    {
        first_name: "elias",
        last_name: "Halbauer",
        department: DepartmentEnum.Informatik,
        school_class: "5CHIF"
    },
    
]

const Stats : FunctionComponent = () => {
    return(
        <div className="w-full h-full flex flex-col">
            <Header headline={"Datatracking Overview"} />
            <div className="grid grid-cols-9 h-full pt-11 grid-rows-6 gap-y-6 w-full">
                <AvgTimePerTour avgTime={7} change={10}/>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl w-full col-span-6 row-span-3">
                    <GuidesPerHour />
                </div>
                <div className='col-span-3 pr-4 flex flex-col gap-4 mt-auto'>
                    <Utilization percentage={66}/>
                </div>
                <div className='col-span-3 h-full grid grid-cols-2 gap-2 row-start-4'>
                    <NumTours allTours={256} currTours={7} />
                </div>
                {/* <div className="col-span-3 row-start-5 row-span-2 pr-6">
                    <LatestGuidesList latestGuidesList={guides}/>
                </div> */}
                <div className="col-span-4 row-span-3">
                    <ToursPerDepartment />
                </div>
                <div className="col-span-2 mx-4">
                    <AvailableGuides numGuides={4}/>
                </div>
                <div className="col-span-2 row-start-6 col-start-8 mx-4">
                    <Day day={new Date()}/>
                </div>
            </div>
        </div>
    )
}

export default Stats