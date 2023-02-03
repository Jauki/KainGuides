import React from "react";
import GuidesPerHour from "../../../common/statitems/GuidesPerHour";

const GuidesPerHourDisplay = () => {

    return(
        <div className="w-full h-full">
            <div className="text-4xl py-2">Führungen pro Stunde</div>
            <div className="text-xl py-2">Daten des Tages der offenen Tür</div>
            <div className="h-full">
                <GuidesPerHour />
            </div>
        </div>
    )
}

export default GuidesPerHourDisplay;