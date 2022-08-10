type UserState ={
    currentUser: any;
    auth: boolean;
    loading: boolean;
    error: null | string
}

type UserAction = {
    type: string,
    payload?: any;
}

const defaultState: UserState = {
    currentUser: {},
    auth: false,
    loading: false,
    error: null
}

const SET_USER = "SET_USER"

export default function userReducer(state = defaultState, action: UserAction) : UserState {
    switch (action.type) {
        case SET_USER:
            return {
                ...state
            }
        default:
            return state

    }
}