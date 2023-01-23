import React from "react";
import { DepartmentEnum } from "../../common/departments";
import Header from "../../common/Header";
import Navbar from "../../common/Navbar";
import { addGuide } from "../../setup/api/GuideApi";
import { GuideType } from "../guidelist/GuideTypes";

const RegisterGuide = () => {

    const addNewGuide = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const first_name : string = (e.currentTarget.elements.namedItem("inputFirstname") as HTMLInputElement).value
        const last_name : string = (e.currentTarget.elements.namedItem("inputLastname") as HTMLInputElement).value
        const dept : DepartmentEnum = (e.currentTarget.elements.namedItem("selectDept") as HTMLInputElement).value as DepartmentEnum
        const school_class : string = (e.currentTarget.elements.namedItem("inputClass") as HTMLInputElement).value
        const grade : number = parseInt(school_class.substring(0,1));
        const classLetter : string = school_class.substring(1);

        const guide : GuideType = {isActive : false, first_name, last_name, dept, school_class}
        addGuide(guide)
    }

    return(
        <div className="w-screen h-screen grid grid-cols-12 px-24">
            <div className="col-span-2">
                <Navbar selected={3} />
            </div>
            <div className="col-start-4 col-span-9 py-16 h-full flex flex-col gap-12">
                <Header headline={"Register Guide"} />
                <form className="flex flex-col w-1/3 gap-4" onSubmit={(e) => addNewGuide(e)}>
                    <input type="text" placeholder="firstname" name="inputFirstname"/>
                    <input type="text" placeholder="lastname" name="inputLastname"/>
                    <select className="bg-gray-50 rounded-md h-10 outline-none" name="selectDept">
                        {Object.keys(DepartmentEnum).map(dept => <option id={dept} value={dept}>{dept}</option>)}
                    </select>
                    <input type="text" placeholder="class" name="inputClass"/>
                    <input type="submit" value="Add" className="bg-primary rounded-md h-10 outline-none text-neutral-50 font-bold"/>
                </form>
            </div>
        </div>
    )
}

export default RegisterGuide;