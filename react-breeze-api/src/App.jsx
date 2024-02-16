import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayouts";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      
      <div>
        <Routes>
          <Route element={<AuthLayout></AuthLayout>}>
            <Route path="/" element={<Home></Home>}></Route>
          </Route>
          <Route element={<GuestLayout></GuestLayout>}>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
