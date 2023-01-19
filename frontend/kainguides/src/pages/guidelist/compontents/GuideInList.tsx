import React from "react";
import Department from "../../../common/Department";
import { DepartmentEnum } from "../../../common/departments";
import { GuideType } from "../GuideTypes";

// type SingleGuideProps = {
//     guide: GuideType
// }


const SingleGuide = ({guide}: {guide : GuideType}) => {

    const activeStyle = {background: '#12B76A'}
    const inActiveStyle = {background: '#BBBBBB'}


    return(
        <div className="w-full grid grid-cols-12">
            <div className="col-span-1 aspect-square w-1/4 rounded-lg" style={(guide.isActive ? activeStyle : inActiveStyle)}></div>
            <div className="col-span-4">{guide.firstname + ' ' + guide.lastname}</div>
            <div className="col-span-2">---</div>
            <div className="col-span-3"><Department dept={guide.dept}/></div>
            <div>{guide.tours} Tours</div>
            
        </div>
    )
}

export default SingleGuide;