import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleTest = () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const navigate = useNavigate();
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(credentialResponse: any) => {
            console.log(jwtDecode(credentialResponse.credential));

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
