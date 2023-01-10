import React from "react";
import UserProfile from "./components/UserProfile";
import { DepartmentEnum } from "../../common/departments";


const UserProfilePage = () => {
    return (
        <div>
            <UserProfile firstname={"elias"} lastname={"Halbauer"} klasse={"5CHIF"} department={DepartmentEnum.Informatik}/>
        </div>
    )
}

export default UserProfilePage