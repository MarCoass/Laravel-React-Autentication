import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // Obtener la cookie CSRF
      await axios.get("/sanctum/csrf-cookie");

      // Realizar la solicitud de inicio de sesión
      const response = await axios.post("/login", { email, password });

      // Limpiar los errores
      setEmailError("");
      setPasswordError("");

      // Verificar si hay errores en la respuesta del servidor
      if (response.data.errors) {
        // Mostrar mensajes de error según la respuesta del servidor
        if (response.data.errors.email) {
          setEmailError(response.data.errors.email[0]);
        }
        if (response.data.errors.password) {
          setPasswordError(response.data.errors.password[0]);
        }
      } else {
        // Si no hay errores, realizar la redirección
        setEmail("");
        setPassword("");
        console.log(response)
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden ">
              <div className="mb-10 text-center md:mb-16">Login</div>
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(""); // Limpiar el error al cambiar el valor
                    }}
                  ></input>
                  <div className="flex">
                    <span className="text-red-400 text-sm m-2 p-2">{emailError}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError(""); // Limpiar el error al cambiar el valor
                    }}
                  ></input>
                  <div className="flex">
                    <span className="text-red-400 text-sm m-2 p-2">{passwordError}</span>
                  </div>
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
                  >
                    Login
                  </button>
                </div>
              </form>
              <Link
                to="/forgot-password"
                className="mb-2 inline-block text-base text-gray-500 hover:underline"
              >
                Forgot Password?
              </Link>
              <p className="text-base text-gray-500">
                Not a member yet?
                <Link to="/register" className="text-primary hover:underline">
                  Register
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
