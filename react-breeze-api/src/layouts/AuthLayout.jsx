import { Navigate, Outlet, Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const AuthLayout = () => {
  const { user, logout } = useAuthContext();
  return user ? (
    <>
      <nav className="navbar bg-primary text-primary-content rounded">
        <div className="navbar-start">
          <a href="#" className="btn btn-ghost text-xl">
            Laravel React
          </a>
        </div>
        <div className="navbar-end space-x-2">
          <Link to="/" className="btn">
            Home
          </Link>

          <button onClick={logout} className="btn">
            Log out
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthLayout;
