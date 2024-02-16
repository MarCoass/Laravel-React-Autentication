import { useState, useEffect } from "react";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import { Link, useParams, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const { csrf } = useAuthContext();

  const [searchParams] = useSearchParams();
  const { token } = useParams();
  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await csrf();
    setErrors([]);
    setStatus(null);
    try {
      const response = await axios.post("/reset-password", {
        email,
        token,
        password,
        password_confirmation,
      });
      setStatus(response.data.status);
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <section className="container mx-auto w-min py-20">
      
            <div className="card w-96 bg-neutral-content text-primary-content ">
              <div className="card-body">
              
                <div className="text-4xl card-title">Resetear contraseña</div>
                <form onClick={handleSubmit}>
                  <div className="mb-6">
                    <input
                      className="input input-bordered w-full max-w-xs"
                      type="password"
                      placeholder="Contraseña"
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
                  <div className="mb-6">
                    <input
                      className="input input-bordered w-full max-w-xs"
                      type="password"
                      placeholder="Confirmacion de la contraseña"
                      value={password_confirmation}
                      onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                      }}
                    ></input>
                  </div>

                  <div className="card-actions justify-end">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Enviar contraseña
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
    </section>
  );
};

export default ResetPassword;
