import { Link } from "react-router-dom";

const LogSigUp = (props) => {
  const { isAuth } = props;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload();
  };

  const id = localStorage.getItem("id");
  return (
    <div>
      {isAuth ? (
        <div className="sm:gap-x-12 sm:text-lg max-w-[236px] text-sm flex text-white justify-between items-center gap-x-4">
          <button className="hover:text-[#596c81]" onClick={handleLogout}>
            Logout
          </button>
          <Link to={`/account/${id}`}>
            <button className="sm:w-[126px] sm:h-[38px] w-[70px] h-[28px] bg-[#526D82] rounded-[38px]  hover:scale-105 transition-all duration-300 ease-in-out">
              martinyis
            </button>
          </Link>
        </div>
      ) : (
        <div className="sm:gap-x-12 sm:text-lg max-w-[236px] text-sm flex text-white justify-between items-center gap-x-4">
          <Link to="/login" className="hover:text-[#596c81]">
            Login
          </Link>
          <Link to="/signup">
            <button className="sm:w-[126px] sm:h-[38px] w-[70px] h-[28px] bg-[#526D82] rounded-[38px]  hover:scale-105 transition-all duration-300 ease-in-out">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LogSigUp;
