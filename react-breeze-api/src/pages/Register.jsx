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
    register({ name, email, password, password_confirmation });
  };

  return (
    <section className="container mx-auto w-min py-20">
      
            <div className="card w-96 bg-neutral-content text-primary-content ">
              <div className="card-body">
                <div className="text-5xl card-title">Registrarse</div>
                <form onSubmit={handleRegister}>
                  <div className="m-6">
                    <input
                      className="input input-bordered w-full max-w-xs"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    {errors.name && (
                        <span className="alert alert-error text-sm p-2">
                          {errors.name[0]}
                        </span>
                    )}
                  </div>
                  <div className="m-6">
                    <input
                      className="input input-bordered w-full max-w-xs"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    {errors.email && (
                      
                        <span className="alert alert-error text-sm p-2">
                          {errors.email[0]}
                        </span>
                     
                    )}
                  </div>
                  <div className="m-6">
                    <input
                      className="input input-bordered w-full max-w-xs"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    {errors.password && (
                      <div className="flex">
                        <span className="alert alert-error text-sm p-2">
                          {errors.password[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="m-6">
                    <input
                      className="input input-bordered w-full max-w-xs"
                      type="password"
                      placeholder="Password Confirmation"
                      value={password_confirmation}
                      onChange={(e) => setPasswordConfir(e.target.value)}
                    ></input>
                    {errors.password_confirmation && (
                      <div className="flex">
                        <span className="alert alert-error text-sm p-2">
                          {errors.password_confirmation[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          
    </section>
  );
};

export default Register;
