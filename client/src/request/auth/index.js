import axiosInstance from "../../utils/axios";

const signUp = async ({ username, email, password }) => {
  try {
    const res = await axiosInstance.post("/auth/signup", {
      username,
      email,
      password,
    });
    if (res.status === 200 || res.status === 201) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  } catch (error) {
    throw error.response.data.error;
  }
};

const login = async ({ email, password }) => {
  try {
    const res = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    if (res.status === 200 || res.status === 201) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  } catch (error) {
    throw error.response.data.error;
  }
};

const deleteToken = () => {
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export { signUp, login, deleteToken };
