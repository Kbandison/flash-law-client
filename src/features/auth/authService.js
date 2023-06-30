import axios from "axios";

const authData = `${process.env.REACT_APP_ENDPOINT}/api/users`;

const registerUser = async (user) => {
  const response = await axios.post(`${authData}/register`, user);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const loginUser = async (user) => {
  const response = await axios.post(`${authData}/login`, user);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logoutUser = async () => {
  localStorage.removeItem("user");
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
};

export default authService;
