import React from "react"
import Navbar from "../../common/Navbar"
import Stats from "./components/Stats"

const Dashboard = () => {
    return(
        <div className="w-screen h-screen grid grid-cols-12 px-24">
            <div className="col-span-2">
                <Navbar />
            </div>
            <div className="col-start-4 col-span-9 py-16">
                <Stats />
            </div>
        </div>
    )
}

export default Dashboard