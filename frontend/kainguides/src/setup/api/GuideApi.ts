import React from "react";
import axios from "axios";
import { async } from "q";
import { GuideType } from "../../pages/guidelist/GuideTypes";
import { url } from "inspector";

const URL = "http://127.0.0.1:8000/guides/"

export const getAllGuides = async () => {
    const guideList = (await axios.get(URL)).data
    return guideList;
}

type addGuideType = {
    guide : GuideType
}

export const addGuide = async (guide : GuideType) => {
    await axios.post(URL, guide).catch(err => console.log(err))
}
