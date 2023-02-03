import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Navbar from "../../common/Navbar";
import { getAllGuides, getGuide } from "../../setup/api/GuideApi";
import { getAllTours } from "../../setup/api/TourApi";
import { GuideType, TourType } from "../guidelist/GuideTypes";
import SingleTour from "./SingleTour";

const TourList = () => {
    const [tours, setTours] = useState<Array<TourType> | null>(null)
    const [filter, setFilter] = useState<string>("")
    const [guides, setGuides] = useState<Array<GuideType>>([])
    const [filteredTours, setFilteredTours] = useState<Array<TourType>>([])


    useEffect(() => {
        getAllTours(setTours)
        const guideList = getAllGuides()
        guideList.then(data => setGuides(data))
        
    }, [])

    useEffect(() => {
        if(tours){
            setFilteredTours(tours)
        }
    }, [tours])

    useEffect(() => {
        if(tours){
            const filtered : Array<TourType> = tours?.filter(tour => guides.find(guide => guide.id === tour.guide)?.first_name.toLowerCase().includes(filter.toLowerCase()))
            setFilteredTours(filtered)
        }
    }, [filter])

    return(
        <div className="w-screen h-screen grid grid-cols-12 px-24">
            <div className="col-span-2">
                <Navbar selected={4} />
            </div>
            <div className="col-start-4 col-span-9 py-16 h-full flex flex-col gap-12">
                <Header headline={"Tours"} />
                <input placeholder="search (FIRSTNAME)" onChange={(e) => setFilter(e.currentTarget.value)}/>
                <div className="w-full">
                    <div className="w-full grid grid-cols-12 font-bold my-4">
                        <div className="col-span-1">Active</div>
                        <div className="col-span-4">Name</div>
                        <div className="col-span-2">visitors</div>
                        <div className="col-span-2">Time</div>
                        <div className="col-span-3">Department</div>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        {
                            filteredTours ? filteredTours.map(tour => <SingleTour tour={tour} key={tour.id}/>) : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourList;