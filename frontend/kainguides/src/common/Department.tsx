import React from "react";
import { automatisierungColors, informatikColors, mechatronikColors, robotikColors } from "../colors";
import { DepartmentEnum } from "./departments";

type DepartmentProps = {
    dept: DepartmentEnum
}

const Department = ({dept}: DepartmentProps) => {
    
    const getcolor = (dept: DepartmentEnum) => {
        switch(dept){
            case DepartmentEnum.Informatik: return informatikColors;
            case DepartmentEnum.Automatisierung: return automatisierungColors;
            case DepartmentEnum.Robotik: return robotikColors;
            case DepartmentEnum.Mechatronik: return mechatronikColors;
        }
    }

    return(
        <div className='text-sm py-0 px-1 rounded-lg w-min' style={getcolor(dept)}>
            {dept}
        </div>
    )
}

export default Department;