import React from "react"
import Utilization from "../../common/statitems/Utilization"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"

const Dashboard = () => {
    return(
        <div className="w-screen h-screen grid grid-cols-12 px-24">
            <div className="col-span-2">
                <Navbar />
            </div>
            <div className="col-start-4 col-span-9 py-16">
                {/* The Component that is rendered here is changed when clicked on a navbar item */}
                <Stats />
            </div>
        </div>
    )
}

export default Dashboard