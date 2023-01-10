import React from "react"
import { DepartmentEnum } from "../../common/departments"

type RoomProps = {
    description: String,
    color: String,
    headline: DepartmentEnum
}

const Room = ({color, description, headline}: RoomProps) => {
    return(
        <div>
            <div className={`flex justify-center align-middle font-bold w-full h-12`} style={{background: color}}>
                {headline}
            </div>
            <div>{description}</div>
        </div>
    )
}

export default Room