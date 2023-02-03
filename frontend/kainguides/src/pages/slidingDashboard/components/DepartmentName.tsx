import React from "react"

const DepartmentName = ({name, color} : {name : string, color : string}) => {

    const style = {
        background : color
    }

    return(
        <div className="flex items-center gap-4">
            <div className="rounded-full w-12 h-12" style={style}></div>
            <div className="font-bold text-6xl">{name}</div>
        </div>
    )
}

export default DepartmentName;