import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Main from "./Main";
import { useEffect } from "react";
const CreateProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-6 relative pb-[300px]">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default CreateProject;
