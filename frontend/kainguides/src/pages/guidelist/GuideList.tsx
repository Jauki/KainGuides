import React, { useContext, useEffect, useState } from "react";
import { DepartmentEnum } from "../../common/departments";
import Header from "../../common/Header";
import Navbar from "../../common/Navbar";
import { GuideContext } from "../../setup/contextManager/GuideProvider";
import SingleGuide from "./compontents/GuideInList";
import { GuideType } from "./GuideTypes";
import { getAllGuides } from "../../setup/api/GuideApi";
import { startGuideTour } from "../../setup/api/TourApi";



const GuideList = () => {

    const guideContext = useContext(GuideContext);

    const [guides, setGuides] = useState<Array<GuideType>>([]);
    const [showStartTour, setShowStartTour] = useState<GuideType | null>(null)
    const [filter, setFilter] = useState<string>("")


    useEffect(() => {
        const guides = getAllGuides();
        guides.then(data => setGuides(data))
    }, [])

    const handleStartTour = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setShowStartTour(null)
        const visitors : number = parseInt((e.currentTarget.elements.namedItem("inputVisitors") as HTMLInputElement).value)
        const potential_students : number = parseInt((e.currentTarget.elements.namedItem("inputPotStudents") as HTMLInputElement).value)
        const department : DepartmentEnum = (e.currentTarget.elements.namedItem("selectDept") as HTMLInputElement).value as DepartmentEnum
        const guide : GuideType | null = showStartTour
        startGuideTour({guide, visitors, potential_students, department})
    }


    return(
        <div className="w-screen h-screen grid grid-cols-12 px-24">
            <div className="col-span-2">
                <Navbar selected={2} />
            </div>
            <div className="col-start-4 col-span-9 py-16 h-full flex flex-col gap-12">
                <Header headline={"Guide List"} />
                <input placeholder="search" onChange={(e) => setFilter(e.currentTarget.value)}/>
                <div className="w-full">
                    <div className="w-full grid grid-cols-12 font-bold my-4">
                        <div className="col-span-1">Start Tour</div>
                        <div className="col-span-4">Name</div>
                        <div className="col-span-2">Time</div>
                        <div className="col-span-3">Class</div>
                        <div>Tours done</div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        {
                            guides.filter(guide => (guide.first_name + " " + guide.last_name).toLowerCase().includes(filter.toLowerCase())).map(guide => <SingleGuide key={guide.id} guide={guide} setShowStartTour={setShowStartTour}/>)
                        }
                    </div>
                </div>
            </div>
            {showStartTour ? 
                <form className="fixed flex flex-col gap-4 w-48 top-1/2 left-28" onSubmit={(e) => handleStartTour(e)}>
                    <h1>{showStartTour.first_name + " " + showStartTour.last_name}</h1>
                    <input placeholder="visitors" type="number" name="inputVisitors"/>
                    <input placeholder="potential students" type="number" name="inputPotStudents"/>
                    <select className="bg-gray-50 rounded-md h-10 outline-none" name="selectDept">
                        {Object.keys(DepartmentEnum).map(dept => <option id={dept} value={dept}>{dept}</option>)}
                    </select>
                    <button type="submit" className="bg-primary text-white rounded-md active:bg-primary50">Submit</button>
                </form>
            :
            <></>}
        </div>
    )
}

export default GuideList;