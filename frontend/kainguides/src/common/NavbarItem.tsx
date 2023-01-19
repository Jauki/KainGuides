import React, {Component} from "react"
import { Link } from "react-router-dom";


type NavbarItemProps = {
    Icon : any, // Gibt wies aussieht keinen Type für heroicons
    name : string,
    route : string
}

const NavbarItem = ({Icon, name, route} : NavbarItemProps) => {
    return(
        <Link to={route}>
            <div className="flex items-center p-2 bg-primary50 rounded-lg">
                <div className="h-5 w-5 mx-2 text-primary">{Icon}</div>
                <div>{name}</div>
            </div>
        </Link>
    )
}

export default NavbarItem