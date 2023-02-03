import React, {createContext, useMemo, useState, useEffect} from "react";
import axios from "axios";
import { GuideType } from "../../pages/guidelist/GuideTypes";
import { DepartmentEnum } from "../../common/departments";

const URLGUIDE : string = 'http://127.0.0.1:8000/guides';
const URLTOUR : string = 'http://127.0.0.1:8000/tours';

type GuideContextValues = {
    getAllGuides : () => void,
    getToursPerHour : () => void,
    toursPerHourList : Array<TourPerHour>,
    guides : Array<GuideType>,
    toursPerDepartment : Array<displayDept>,
    getToursPerDepartment : () => void
}

type TourPerHour = {
    hour : number,
    tours : number
}

type ToursPerDepartment = {
    Informatik : number,
    Robotik : number,
    Automatisierung : number,
    Mechatronik : number
}

export type displayDept = {
    department : string,
    value : number
}

export const GuideContext = createContext<GuideContextValues | null>(null);

const GuideProvider = ({children} : {children: React.ReactNode}) => {

    const [toursPerHourList, setToursPerHourList] = useState<Array<TourPerHour>>([{hour : 1, tours : 2}, {hour : 2, tours : 5}])
    const [guides, setGuides] = useState<Array<GuideType>>([])
    const [toursPerDepartment, setToursPerDepartment] = useState<Array<displayDept>>([])
    const accessToken = localStorage.getItem("accessToken")

    useEffect(() => {
        getAllGuides()
        getToursPerDepartment()
        getToursPerHour()
    }, [])

    const getAllGuides = async () => {
        const accessToken = localStorage.getItem("accessToken")
        const guideList= (await axios.get(URLGUIDE,{
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }})).data
        setGuides(guideList)
    }

    const getToursPerHour = async () => {
       axios.get("http://localhost:8080/tourPerHour", {
        headers: {
                'Authorization': 'Bearer ' + accessToken
            }
       }).then(res => {
        if(res.status == 200){
            setToursPerHourList(res.data)
        }else{
            console.warn("get Tours per hour did not work!")
        }
       }).catch(err => console.error(err))
    }

    const getToursPerDepartment = () => {
        axios.get("https://kainneu.uber.space/kainguides/api/departmentstats/", {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then(res => {
        if(res.status == 200){
            const data : ToursPerDepartment = res.data
            const displayedData : Array<displayDept> = [
                {
                    department: "Informatik",
                    value : data.Informatik
                },
                {
                    department: "Mechatronik",
                    value : data.Mechatronik
                },
                {
                    department: "Automatisierung",
                    value : data.Automatisierung
                },
                {
                    department: "Robotik",
                    value : data.Robotik
                },
            ]
            setToursPerDepartment(displayedData)
            
        }else{
            console.warn("get Tours per hour did not work!")
        }
       }).catch(err => console.error(err))
    }

    const contextData = {
      getAllGuides,
      toursPerHourList,
      getToursPerHour,
      guides,
      toursPerDepartment,
      getToursPerDepartment
    }


    return (
        <GuideContext.Provider value={contextData}>
            {children}
        </GuideContext.Provider>
    );
};

export default GuideProvider;

