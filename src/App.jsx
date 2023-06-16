import About from "./pages/About/About";
import Account from "./pages/Account/Account";
import AccountEdit from "./pages/AccountEdit/AccountEdit";
import CreateProject from "./pages/CreateProject/CreateProject";
import Login from "./pages/Login/Login";
import Projects from "./pages/Projects/Projects";
import Signup from "./pages/Signup/Signup";
import UserBoard from "./pages/UserBoard/UserBoard";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMe } from "./redux/slices/auth";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMe());
  }, []);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/edit" element={<AccountEdit />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/user-board" element={<UserBoard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
