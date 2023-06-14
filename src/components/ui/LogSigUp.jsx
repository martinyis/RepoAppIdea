import { Link } from "react-router-dom";

const LogSigUp = (props) => {
  const { isAuth } = props;
  return (
    <div>
      {isAuth ? (
        <div className="sm:gap-x-12   sm:text-lg max-w-[236px] text-sm flex text-white justify-between items-center gap-x-4">
          <button>Logout</button>
          <Link to="/signup">
            <button className="sm:w-[126px] sm:h-[38px] w-[70px] h-[28px] bg-[#526D82] rounded-[38px]">
              martinyis
            </button>
          </Link>
        </div>
      ) : (
        <div className="sm:gap-x-12   sm:text-lg max-w-[236px] text-sm flex text-white justify-between items-center gap-x-4 ">
          <Link to="/login">Login</Link>
          <Link to="/signup">
            <button className="sm:w-[126px] sm:h-[38px] w-[70px] h-[28px] bg-[#526D82] rounded-[38px]">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LogSigUp;
