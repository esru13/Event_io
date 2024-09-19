import { Route, Routes } from "react-router-dom";
import "./App.css";
import CenterLayout from "./component/pageLayout/centerLayout";
import RightLayout from "./component/pageLayout/rightLayout";
import Dashboard from "./pages/dashboard/dashboard";
import Newevent from "./pages/newevent/newevent";
import Manageevent from "./pages/manageevent/manageevent";
import User from "./pages/user/user";
import UserManagement from "./pages/usermanagement/usermanagement";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import Landing from "./pages/landing/landing";


function App() {
  return (
    <div className="bg-custom z-0">
      <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newevent" element={<Newevent />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/Manageevent" element={<Manageevent />} />
        <Route path="/user" element={<User />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
