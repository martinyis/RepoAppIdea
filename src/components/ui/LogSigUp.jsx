import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPayload } from "../../redux/slices/auth";
import { useEffect } from "react";
import { getNCharacters } from "../../utils/helpers";
const LogSigUp = (props) => {
  //useSelector
  const user = useSelector(selectPayload);
  const username = user?.data.user.username;
  const avatarUrl = user?.data.user.avatarUrl;
  const { isAuth } = props;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload();
  };
  useEffect(() => {
    console.log(user);
  }, []);
  const id = localStorage.getItem("id");

  return (
    <div>
      {isAuth ? (
        <div className="md:pl-7 sm:gap-x-12 sm:text-lg max-w-[236px] text-sm flex text-white justify-around items-center gap-x-4">
          <button className="hover:text-[#596c81]" onClick={handleLogout}>
            Logout
          </button>
          <Link to={`/account/${id}`}>
            <button className="sm:w-[160px] sm:h-[38px] w-[70px] h-[28px] bg-[#526D82] rounded-[38px]  hover:scale-105 transition-all duration-300 ease-in-out flex justify-center items-center px-4">
              <div class="w-7 h-7 rounded-full overflow-hidden border mr-2">
                {avatarUrl ? (
                  <img
                    class="w-full h-full object-cover"
                    src={avatarUrl}
                    alt="Avatar"
                  />
                ) : (
                  <span>{username?.charAt(0)?.toUpperCase()}</span>
                )}
              </div>
              {username ? getNCharacters(username, 10) : "Account"}
            </button>
          </Link>
        </div>
      ) : (
        <div className="md:pl-7 sm:gap-x-12 sm:text-lg max-w-[236px] text-sm flex text-white justify-between items-center gap-x-4">
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
