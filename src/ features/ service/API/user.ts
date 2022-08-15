import axios from "axios";
import { Dispatch } from "redux";
import { setError, setUser } from "../../reducers/userReducer";

// export type UserRegistration = {
//   email: string;
//   phone: string;
//   password: string;
// };

const apiLogin = "/api/v1/login";
const apiLogout = "/api/v1/logout";
const apiKitty = "/api/v1/kitty";
const apiProfile = "/api/v1/profile";

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

export const getCat = async () => {
  const response = await axios.get<{ data: { src: string } }>(apiKitty, {});
  return response.data.data.src;
};

export const getUserData = async () => {
  const response = await axios.get<{ data: { name: string } }>(apiProfile, {});
  return response.data.data.name;
};




