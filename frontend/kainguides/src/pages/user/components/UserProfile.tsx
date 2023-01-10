import React from "react"
import { DepartmentEnum } from "../../../common/departments"

type UserProfileProps = {
    firstname: String,
    lastname: String,
    klasse: String,
    department: DepartmentEnum
}

const UserProfile = ({firstname, lastname, klasse, department}: UserProfileProps) => {
    return (
        <div>
            <div>Hello From UserProfile</div>
            <div>{firstname}</div>
            <div>{lastname}</div>
            <div>{klasse}</div>
            <div>{department}</div>
        </div>
    )
}

export default UserProfile