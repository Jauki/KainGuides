import React, { useContext, useEffect, useState } from "react";
import { DepartmentEnum } from "../../common/departments";
import Header from "../../common/Header";
import Navbar from "../../common/Navbar";
import { GuideContext } from "../../setup/contextManager/GuideProvider";
import SingleGuide from "./compontents/GuideInList";
import { GuideType } from "./GuideTypes";
import { getAllGuides } from "../../setup/api/GuideApi";



const GuideList = () => {
const guideContext = useContext(GuideContext);

const [guides, setGuides] = useState<Array<GuideType>>([]);

    useEffect(() => {
        const guides = getAllGuides();
        console.log(guides.then(data => setGuides(data)))
    }, [])

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
                            guides.map(guide => <SingleGuide key={guide.id} guide={guide}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuideList;