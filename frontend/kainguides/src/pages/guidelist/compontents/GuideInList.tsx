import React, {useState, useEffect} from "react";
import Department from "../../../common/Department";
import { DepartmentEnum } from "../../../common/departments";
import { startGuideTour } from "../../../setup/api/TourApi";
import { GuideType } from "../GuideTypes";

// type SingleGuideProps = {
//     guide: GuideType
// }


const SingleGuide = ({guide, setShowStartTour}: {guide : GuideType, setShowStartTour : React.Dispatch<React.SetStateAction<GuideType | null>>}) => {

    const activeStyle = {background: '#12B76A'}
    const inActiveStyle = {background: '#BBBBBB'}
    const [isActive, setIsActive] = useState<boolean>(false)

    const startTour = (guide : GuideType) => {
        setShowStartTour(guide)
        setIsActive(!isActive)
    }


    return(
        <div className="w-full grid grid-cols-12 items-center" id={`${guide!.id}`}>
            <button className="bg-primary text-white my-1 mr-2 rounded-sm active:bg-primary50" onClick={() => startTour(guide)}>Start</button>
            <div className="col-span-4">{guide.first_name + ' ' + guide.last_name}</div>
            <div className="col-span-2">---</div>
            <div className="col-span-3">{guide.school_class}</div>
            <div>{guide.tours} Tours</div>
            
        </div>
    )
}

export default SingleGuide;