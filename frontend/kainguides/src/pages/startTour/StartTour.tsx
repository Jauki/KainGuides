import React from "react"
import { DepartmentEnum } from "../../common/departments"
import Header from "../../common/Header"
import { GuideType } from "../guidelist/GuideTypes"

const StartTour = ({guide} : {guide : GuideType}) => {
    return(
        <div>
            <Header headline="Start Tour"/>
            <input placeholder="visitors" type="number"/>
            <input placeholder="potential students" type="number"/>
            <select>
                <select className="bg-gray-50 rounded-md h-10 outline-none" name="selectDept">
                    {Object.keys(DepartmentEnum).map(dept => <option id={dept} value={dept}>{dept}</option>)}
                </select>
            </select>
        </div>
    )
}

export default StartTour