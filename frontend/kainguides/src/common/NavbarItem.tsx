import React, {Component} from "react"
import { Link } from "react-router-dom";


type NavbarItemProps = {
    Icon : any, // Gibt wies aussieht keinen Type für heroicons
    name : string,
    route : string,
    isSelected: boolean
}

const NavbarItem = ({Icon, name, route, isSelected} : NavbarItemProps) => {

    const selectedStyle = {background: '#F9F5FF'}

    return(
        <Link to={route}>
            <div className="flex items-center p-2 rounded-lg" style={isSelected ? selectedStyle : {}}>
                <div className="h-5 w-5 mx-2 text-primary">{Icon}</div>
                <div>{name}</div>
            </div>
        </Link>
    )
}

export default NavbarItem