import axios, { AxiosPromise } from "axios";
import Department from "../../common/Department";
import { DepartmentEnum } from "../../common/departments";
import { GuideType, TourType } from "../../pages/guidelist/GuideTypes";

const URL = "https://kainneu.uber.space/kainguides/api/tours/"

type startGuideTourType = {
    guide : GuideType | null,
    visitors : number,
    potential_students : number,
    department : DepartmentEnum
}

export const startGuideTour = async ({guide, visitors, potential_students, department} : startGuideTourType) => {
    const accessToken = localStorage.getItem("accessToken")
    await axios.post(URL, {
        guide : guide!.id,
        visitors,
        potential_students,
        department
    }, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    })
}

export const getAllTours = async (setTours : Function) => {
    const accessToken = localStorage.getItem("accessToken")
    const tourList : Array<TourType> = (await axios.get(URL, 
        {headers: {
            'Authorization': 'Bearer ' + accessToken
        }}
        )).data
    // Sorts the array so that the active tours are always displayed on top
    tourList.sort((a, b) => {
        if(a.end_time && b.end_time){
            return Date.parse(b.end_time) - Date.parse(a.end_time)
        }
        return -1
    })
    setTours(tourList)
}

export const endTour = async (tour : TourType) => {
    const accessToken = localStorage.getItem("accessToken")
    await axios.post("https://kainneu.uber.space/kainguides/api/end/" + tour.id + "/", {},
        {headers: {
            'Authorization': 'Bearer ' + accessToken
        }}
    )
}

export const resumeTour = async (tour : TourType) => {
    const accessToken = localStorage.getItem("accessToken")
    console.log(tour.id)
    await axios.post("https://kainneu.uber.space/kainguides/api/resume/" + tour.id + "/", {},
        {headers: {
            'Authorization': 'Bearer ' + accessToken
        }}
    )
}


export const startTour = async ({tour} : {tour : TourType}) => {
    axios.post(URL, tour).catch(err => console.log(err))
}