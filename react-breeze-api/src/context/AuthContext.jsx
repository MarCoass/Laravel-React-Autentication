import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const navigate = useNavigate();

  const getUser = async () => {
    const { data } = await axios.get("/api/user");
    setUser(data);
  };

  const login = async ({ email, password }) => {
    await csrf();
    try {
      
      await axios.post("/login", { email, password });
      await getUser();
      navigate("/");
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const register = async ({ name, email, password, password_confirmation }) => {
    await csrf();
    try {
     
      await axios.post("/register", {
        name,
        email,
        password,
        password_confirmation,
      });

      await getUser();
      navigate("/");
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const logout = async () => {
    axios.post('/logout').then(()=>{
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider value={{ user, errors, getUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}