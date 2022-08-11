

type UserState ={
    currentUser: any;
    isAuth: boolean;
    loading: boolean;
    error: null | string
}

type UserAction = {
    type: string,
    payload?: any;
}

const defaultState: UserState = {
    currentUser: {},
    isAuth: false,
    loading: false,
    error: null
}

const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"

export default function userReducer(state = defaultState, action: UserAction) : UserState {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state

    }
}

export const setUser  = (user: object)=> ({type: SET_USER, payload: user})
export const logout  = () => ({type: LOGOUT})