import React, {createContext, useMemo} from "react";
import axios from "axios";

const URL : string = 'http://127.0.0.1:8000/guides';


type GuideContextValues = {
    getAllGuides : () => void
}

export const GuideContext = createContext<GuideContextValues | null>(null);

const GuideProvider = ({children} : {children: React.ReactNode}) => {
    const getAllGuides = async () => {
        const guideList= (await axios.get(URL)).data
        console.log("foo")
        console.log(guideList);
        
    }

    const contextData = useMemo(
    () => ({
      getAllGuides
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

    return (
        <GuideContext.Provider value={contextData}>
            {children}
        </GuideContext.Provider>
    );
};

export default GuideProvider;

