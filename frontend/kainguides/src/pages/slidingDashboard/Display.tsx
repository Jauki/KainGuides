import React from "react";
import ToursPerDepartment from "../../common/statitems/ToursPerDepartment";
import DisplayToursPerDepartment from "./components/DiplayToursPerDepartment";

import DataTrackedByNow from "./components/DataTrackedByNow";
import GuidesPerHourDisplay from "./components/GuidesPerHourDisplay";

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000, // 1000 = 1 Sek

  };

const Display = () => {
    return(
        <div className="w-screen h-screen py-20 px-10 overflow-hidden">
                <div className="w-screen h-screen px-10 overflow-y-hidden">
                    <DisplayToursPerDepartment />
                </div>
        </div>
    )
}

export default Display;