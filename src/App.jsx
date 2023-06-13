import About from "./pages/About/About";
import Account from "./pages/Account/Account";
import AccountEdit from "./pages/AccountEdit/AccountEdit";
import CreateProject from "./pages/CreateProject/CreateProject";
import Login from "./pages/Login/Login";
import Projects from "./pages/Projects/Projects";
import Signup from "./pages/Signup/Signup";
import UserBoard from "./pages/UserBoard/UserBoard";

import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/edit" element={<AccountEdit />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-board" element={<UserBoard />} />
      </Routes>
    </div>
  );
}
export default App;
