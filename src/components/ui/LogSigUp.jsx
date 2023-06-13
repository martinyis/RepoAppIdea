import { Link } from "react-router-dom";

const LogSigUp = () => {
  return (
    <div className="max-w-[236px] text-lg flex text-xl text-white justify-between items-center gap-x-12 hidden md:flex">
      <Link to="/login">Login</Link>
      <Link to="/signup">
        <button className="w-[126px] h-[38px] bg-[#526D82] rounded-[38px]">
          Sign up
        </button>
      </Link>
    </div>
  );
};

export default LogSigUp;
