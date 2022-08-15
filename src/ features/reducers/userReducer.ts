type UserState = {
  currentUser: any;
  isAuth: boolean;
  error: null | string;
};

type UserAction = {
  type: string;
  payload?: any;
};

const defaultState: UserState = {
  currentUser: {},
  isAuth: false,
  error: null,
};

const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";
const SET_USER_ERROR = "SET_USER_ERROR";


export default function userReducer(
  state = defaultState,
  action: UserAction
): UserState {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
        error: null,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
}

export const setUser = (user: object) => ({ type: SET_USER, payload: user });
export const setError = (user: object) => ({
  type: SET_USER_ERROR,
  payload: user,
});
export const logout = () => ({ type: LOGOUT });