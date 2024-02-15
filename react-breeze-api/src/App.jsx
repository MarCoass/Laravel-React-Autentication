import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import useAuthContext from "./context/AuthContext";

function App() {
  const { user, logout } = useAuthContext();
  return (
    <div className="max-w-6xl mx-auto">
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
            {user ? (
              <>
                <li>
                  <button
                    onClick={logout}
                    className="block rounded py-2 pr-4 pl-3 text-black"
                  >
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block rounded py-2 pr-4 pl-3 text-black"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block rounded py-2 pr-4 pl-3 text-black"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
