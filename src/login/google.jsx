import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleTest = () => {
  // const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientId ="1067524630700-26bll4iau9498v787t79u5eufk7rnpth.apps.googleusercontent.com";
  const navigate = useNavigate(); //
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);
            navigate("/user");
          }}
          onFailure={(err) => {
            console.log(err);
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleTest;
