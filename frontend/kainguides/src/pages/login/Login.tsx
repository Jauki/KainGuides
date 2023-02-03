import React from "react"
import Header from "../../common/Header";
import Navbar from "../../common/Navbar";
import { loginUser, UserType } from "../../setup/api/Auth";

const Login = () => {

    const login = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username : string = (e.currentTarget.elements.namedItem("inputUsername") as HTMLInputElement).value
        const passwd : string = (e.currentTarget.elements.namedItem("inputPasswd") as HTMLInputElement).value

        const loginCredentials : UserType = {
            username: username,
            password : passwd
        }
        loginUser(loginCredentials)
    }

    return(
        <div className="w-screen h-screen grid grid-cols-12 px-24">
            <div className="col-span-2">
                <Navbar selected={1}/>
            </div>
            <form onSubmit={(e : React.FormEvent<HTMLFormElement>) => login(e)} className="py-36 px-6 col-span-3">
                <Header headline="Login"/>
                <input type="text" placeholder="Username" name="inputUsername" className="w-full m-2 mt-6"/>
                <input type="password" placeholder="password" className="w-full m-2" name="inputPasswd"/>
                <button type="submit" className="bg-primary text-white w-full m-2 h-8 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Login;