import { useState } from "react";
import useAuthContext from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfir] = useState("");
  const [email, setEmail] = useState("");
  const { register, errors } = useAuthContext();

  const handleRegister = async (e) => {
    e.preventDefault();
    register({name, email, password, password_confirmation})
   
  };

  return (
    <section className="py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden ">
              <div className="mb-10 text-center md:mb-16">Register</div>
              <form onSubmit={handleRegister}>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  {errors.name && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.name[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  {errors.password && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.password[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password Confirmation"
                    value={password_confirmation}
                    onChange={(e) => setPasswordConfir(e.target.value)}
                  ></input>
                  {errors.password_confirmation && (
                    <div className="flex">
                      <span className="text-red-400 text-sm m-2 p-2">
                        {errors.password_confirmation[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mb-10">
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
