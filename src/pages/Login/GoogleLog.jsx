import GoogleLogin from "react-google-login";
import axios from "./../../axios";
import { isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import { setAuthTrue } from "../../redux/slices/auth";
import { setPayload } from "../../redux/slices/auth";

function App({ text }) {
  const dispatch = useDispatch();
  const responseGoogle = async (response) => {
    const bodyObject = {
      authId: response.tokenId,
    };
    try {
      if (isEmpty(response.errors)) {
        const data = await axios.post("/api/v1/users/login/google", bodyObject);
        if (data !== undefined) {
          dispatch(setAuthTrue());
          dispatch(setPayload(data.data));
          localStorage.setItem("id", data.data.data.user._id);
          localStorage.setItem("token", `Bearer ${data.data.token}`);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_CLIENT_ID}`}
      buttonText={text}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default App;
