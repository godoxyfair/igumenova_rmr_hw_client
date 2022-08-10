import axios from "axios";
import {Action, Dispatch} from "redux";
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
        try {
            const response = await axios.post('http://51.250.65.73/api/v1/login', {
                email,
                phone,
                password
            })
            console.log(response.data)
        }catch (e: any) {
            alert(e.response.data.message)
        }
    }

}