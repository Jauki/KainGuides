import React, { useEffect, useState } from "react";
import Department from "../../common/Department";
import { getGuide } from "../../setup/api/GuideApi";
import { endTour, resumeTour } from "../../setup/api/TourApi";
import { GuideType, TourType } from "../guidelist/GuideTypes";

type SingleTourProps = {
    tour : TourType,
}

const SingleTour = ({tour} : SingleTourProps) => {

    const activeStyle = {background: '#12B76A'}
    const inActiveStyle = {background: '#BBBBBB'}

    const [guide, setGuide] = useState<GuideType | null>()
    const [isActive, setIsactive] = useState<boolean>(true)

    useEffect(() => {
        getGuide(tour.guide, setGuide)
        if(tour.end_time){
            setIsactive(false)
        }else{
            setIsactive(true)
        }
    }, [])

    const onEndTour = () => {
        if(isActive){
            endTour(tour)
        }else{
            resumeTour(tour)
        }
        setIsactive(!isActive)
    }

    return(
        <div>
            {guide ? 
            <div className="w-full grid grid-cols-12" id={`${guide!.id}`}>
                <div className="col-span-1 aspect-square w-1/4 rounded-lg " style={(isActive ? activeStyle : inActiveStyle)} onClick={() => onEndTour()}></div>
                <div className="col-span-4">{guide.first_name + ' ' + guide.last_name}</div>
                <div className="col-span-2">{tour.visitors}</div>
                <div className="col-span-2">---</div>
                <div className="col-span-3"><Department dept={tour.department}/></div>
                <div className="col-span-3"></div>
            </div>
            :
            <></>
            }
        </div>
    )
}

export default SingleTour