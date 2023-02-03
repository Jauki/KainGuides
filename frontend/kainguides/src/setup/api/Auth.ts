import React from "react";
import axios from "axios";

const URL = "https://kainneu.uber.space/kainguides/api/login/"

export type UserType = {
    username : string,
    password : string
}

export const loginUser = async ({username, password} : UserType) => {
    const {access, refresh} = (await axios.post(URL, {username, password})).data
    localStorage.setItem("accessToken", access)
}

export const logoutUser = () => {
    localStorage.removeItem("acessToken")
}