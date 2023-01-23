import { type } from "@testing-library/user-event/dist/type"
import React from "react"

type HeaderProps = {
    headline : string
}

const Header = ({headline} : HeaderProps) => {
    return(
        <div className="w-full flex">
            <div className="text-gray-800 text-4xl">{headline}</div>
            
        </div>
    )
}

export default Header