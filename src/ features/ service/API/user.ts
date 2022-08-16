import axios from "axios";
import { Dispatch } from "redux";
import { setError, setUser } from "../../reducers/userReducer";
import {apiKitty, apiLogin, apiLogout, apiProfile} from "./userEndpoint";
import {dataKitty, dataProfile} from "./userDTO";

// export type UserRegistration = {
//   email: string;
//   phone: string;
//   password: string;
// };


export const registration = async (
  email: string,
  phone: string,
  password: string
) => {
  try {
    const response = await axios.post("/api/v1/registration", {
      email,
      phone,
      password,
    });
    alert(response.data.message);
  } catch (e: any) {
    alert(e.response.data.message);
  }
};

export const login = (email: string, phone: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(
        apiLogin,
        {
          email,
          phone,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(setUser(response.data));
    } catch (e: any) {
      dispatch(setError(e.response.data.message));
    }
  };
};

export const logoutFunc = async () => {
  try {
    await axios.post(apiLogout);
  } catch (e: any) {
    alert(e.response.data.message);
  }
};
//TODO kittyDTO type data: { src: string }
export const getCat = async () => {
  const response = await axios.get<{ data: dataKitty }>(apiKitty, {});
  return response.data.data.src;
};

export const getUserData = async () => {
  const response = await axios.get<{ data: dataProfile }>(apiProfile, {});
  return response.data.data.name;
};




