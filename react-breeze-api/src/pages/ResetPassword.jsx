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
    <section className="py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden ">
              {status && (
                <div className="bg-green-700 m-2 p-2 rounded text-white">
                  {status}
                  <Link to='/login'>Log in</Link>
                </div>
              )}
              <div className="mb-10 text-center md:mb-16">Reset password</div>
              <form onClick={handleSubmit}>
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
                <div className="mb-6">
                  <input
                    type="password"
                    placeholder="Password confirmation"
                    value={password_confirmation}
                    onChange={(e) => {
                      setPasswordConfirm(e.target.value);
                    }}
                  ></input>
                </div>

                <div className="mb-10">
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
                  >
                    Send Password
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

export default ResetPassword;
