import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors } = useAuthContext();

  const handleLogin = async (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <section className="container mx-auto w-min py-20">
      <div className="card w-96 bg-neutral-content text-primary-content ">
        <div className="card-body">
          <div className="text-5xl card-title">Iniciar sesión</div>
          <form onSubmit={handleLogin}>
            <div className="m-6 flex flex-col">
              <span className="text-xl">Email</span>
              <input
                className="input input-bordered w-full max-w-xs"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              {errors.email && (
                <span className="alert alert-error text-sm p-2">
                  {errors.email[0]}
                </span>
              )}
            </div>
            <div className="m-6 flex flex-col">
              <span className=" text-xl">Contraseña</span>
              <input
                className="input input-bordered w-full max-w-xs"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              {errors.password && (
                <span className="alert alert-error text-sm p-2">
                  {errors.password[0]}
                </span>
              )}
            </div>
            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="card-footer">
            <Link
              to="/forgot-password"
              className="mx-5 inline-block text-base text-primary hover:underline"
            >
              Resetear contraseña.
            </Link>
            <Link to="/register" className="text-primary hover:underline">
              Registrarme
            </Link>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Login;
