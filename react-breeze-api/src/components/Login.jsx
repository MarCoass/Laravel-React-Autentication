import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors } = useAuthContext();

  const handleLogin = async (event) => {
    event.preventDefault();
    login({email, password});
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
                    }}
                  ></input>
                  {errors.email && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.email[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                  {errors.password && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.password[0]}
                      </span>
                    </div>
                  )}
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
