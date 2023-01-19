import React from "react";
import { DepartmentEnum } from "../../common/departments";
import Header from "../../common/Header";
import Navbar from "../../common/Navbar";
import SingleGuide from "./compontents/GuideInList";
import { GuideType } from "./GuideTypes";

const guideList: Array<GuideType> = [
    {
        isActive: true,
        firstname: "Elias",
        lastname: "Halbauer",
        time: null,
        dept: DepartmentEnum.Informatik,
        tours: 6
    },
    {
        isActive: false,
        firstname: "Elias",
        lastname: "Halbauer",
        time: null,
        dept: DepartmentEnum.Automatisierung,
        tours: 6
    },
    {
        isActive: true,
        firstname: "Elias",
        lastname: "Halbauer",
        time: null,
        dept: DepartmentEnum.Mechatronik,
        tours: 6
    },
    {
        isActive: true,
        firstname: "Elias",
        lastname: "Halbauer",
        time: null,
        dept: DepartmentEnum.Robotik,
        tours: 6
    },
]

const GuideList = () => {
    return(
        <div className="w-screen h-screen grid grid-cols-12 px-24">
            <div className="col-span-2">
                <Navbar selected={2} />
            </div>
            <div className="col-start-4 col-span-9 py-16 h-full flex flex-col gap-12">
                <Header headline={"Guide List"} />
                <div className="w-full">
                    <div className="w-full grid grid-cols-12 font-bold my-4">
                        <div className="col-span-1">Active</div>
                        <div className="col-span-4">Name</div>
                        <div className="col-span-2">Time</div>
                        <div className="col-span-3">Department</div>
                        <div>Tours done</div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        {
                            guideList.map(guide => <SingleGuide guide={guide}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuideList;