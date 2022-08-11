import axios from "axios";
import {Action, Dispatch} from "redux";
import {setError, setUser} from "../../reducers/userReducer";
import {useState} from "react";



export type UserRegistration = {
    email: string,
    phone: string,
    password: string,
}



export const registration = async (email: string, phone: string, password: string) => {
    try {
        const response = await axios.post('http://51.250.65.73/api/v1/registration', {
            email,
            phone,
            password
        })
        alert(response.data.message)
    }catch (e: any) {
        alert(e.response.data.message)
    }


}



export const login = (email: string, phone: string, password: string) => {

    //TODO type in dispatch?
    return async (dispatch: Dispatch)=> {
        // axios.defaults.withCredentials = true
        try {
            const response = await axios.post('http://51.250.65.73/api/v1/login',
                {
                        email,
                        phone,
                        password,
                     },

                // {
                //     withCredentials: true
                // }
                )
            console.log(response.data)
            dispatch(setUser(response.data))

        }catch (e: any) {
            alert(e.response.data.message)
        }
    }

}

export const logoutFunc = async (email: string, phone: string, password: string) => {
    try {
        const response = await axios.post('http://51.250.65.73/api/v1/logout', {
        })
        alert(response.data.message)
    }catch (e: any) {
        alert(e.response.data.message)
    }
}

export const getCat = async () => {
    try {
        const response = await axios.post('http://51.250.65.73/api/v1/kitty', {
        })
        alert(response.data.message)
    }catch (e: any) {
        alert(e.response.data.message)
    }
}




