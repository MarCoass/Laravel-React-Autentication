import { useState, useEffect } from "react";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const { csrf } = useAuthContext();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await csrf();
    setErrors([]);
    try {
      const response = await axios.post("/forgot-password", { email });
      setStatus(response.data.status);
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <section className="py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="card w-96 bg-neutral-content text-primary-content ">
            <div className="card-body">
               
              <div className="text-4xl card-title">Resetear contraseña</div>
              <form onClick={handleSubmit}>
                <div className="mb-6">
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

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Enviar
                  </button>
                </div>
              </form>
              {status && (
                <div className="alert alert-success">
                  {status}
                </div>
              )}
            </div>
            
            </div>
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
