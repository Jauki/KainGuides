import React from "react";
import axios from "axios";
import { async } from "q";
import { GuideType } from "../../pages/guidelist/GuideTypes";
import { url } from "inspector";

const URL = "https://kainneu.uber.space/kainguides/api/guides/"

export const getAllGuides = async () => {
    const accessToken = localStorage.getItem("accessToken")
    const guideList = (await axios.get(URL, 
            {headers: {
                'Authorization': 'Bearer ' + accessToken
            }}
        )).data
    return guideList;
}

export const getGuide = async (id : number, setGuide? : Function) => {
    const accessToken = localStorage.getItem("accessToken")
        const guide : GuideType = (await axios.get<GuideType>(URL + id, 
            {headers: {
                'Authorization': 'Bearer ' + accessToken
            }}
            )).data
        if(setGuide){
            setGuide(guide)
        }
        return guide
}

type addGuideType = {
    guide : GuideType
}

export const addGuide = async (guide : GuideType) => {
    const accessToken = localStorage.getItem("accessToken")
    await axios.post(URL, guide, 
        {headers: {
        'Authorization': 'Bearer ' + accessToken
        }}
        ).catch(err => console.log(err))
}

