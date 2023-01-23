import axios from "axios";
import { GuideType } from "../../pages/guidelist/GuideTypes";

const URL = "http://127.0.0.1:8000/tours/"

export const startGuideTour = async (guide : GuideType) => {

    await axios.post(URL)
}