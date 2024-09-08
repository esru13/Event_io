import { Route, Routes } from "react-router-dom";
import "./App.css";
import CenterLayout from "./component/pageLayout/centerLayout";
import RightLayout from "./component/pageLayout/rightLayout";
import Dashboard from "./pages/dashboard/dashboard";
import Newevent from "./pages/newevent/newevent";
import Manageevent from "./pages/manageevent/manageevent";
import User from "./pages/user/user";
import UserManagement from "./pages/usermanagement/usermanagement";

function App() {
  return (
    <div className="bg-custom z-0">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/newevent" element={<Newevent />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/Manageevent" element={<Manageevent />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
