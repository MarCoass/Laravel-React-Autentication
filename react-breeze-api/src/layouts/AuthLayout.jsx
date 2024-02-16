import { Navigate, Outlet, Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const AuthLayout = () => {
  const { user, logout } = useAuthContext();
  return user ? (
    <>
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center">
          Laravel React
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <Link to="/" className="block rounded py-2 pr-4 pl-3 text-black">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="block rounded py-2 pr-4 pl-3 text-black"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthLayout;
