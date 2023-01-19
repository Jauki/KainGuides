import React from "react"
import {MapIcon, HomeIcon, ListBulletIcon, UserPlusIcon, ArrowRightOnRectangleIcon} from "@heroicons/react/24/outline"
import NavbarItem from "./NavbarItem";

const Navbar = ({selected} : {selected: number}) => {
    return(
        <div className=" w-full h-full py-12 flex flex-col text-gray-800">
            <div className="font-medium text-lg flex items-center">
                <MapIcon className="h-5 w-5 mr-2 text-primary" />
                <div>Kainsystem</div>
            </div>
            <div className="w-full my-12">
                <div className="font-medium">Management</div>
                <div className="flex flex-col gap-4 py-4">
                    <NavbarItem Icon={<HomeIcon />} name={"Overview"} route={"/dashboard"} isSelected={(selected==1)}/>
                    <NavbarItem Icon={<ListBulletIcon />} name={"Guide List"} route={"/guidelist"} isSelected={(selected==2)}/>
                    <NavbarItem Icon={<UserPlusIcon />} name={"Register Guide"} route={"/register"} isSelected={selected==3}/>
                </div>
            </div>
            <div className="mt-auto">
                <div className="text-lg flex items-center">
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2 text-primary"/>
                    <div>Logout</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
