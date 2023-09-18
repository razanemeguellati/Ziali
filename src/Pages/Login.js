import ziali from "../images/ziali.png" ;
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

import { useState } from "react";

const Login = () => {
   const [user , setUser]= useState(null)
    return ( 
    <div className="flex flex-col lg:flex-row">
        <div className=" border-2 border-blue flex flex-col justify-center items-center  h-[40%]  lg:w-[20%] lg:h-screen">
            <img src={ziali} className="w-[150px]" alt="ziali logo" />
             <h1 className="text-xl font-bold text-blue"> Creer un compte</h1>
        </div>


        <div>

        <LoginSocialGoogle
        client_id={"261765265732-tmi5camf60l8s89ooub0sit7se8pin9o.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="online"
        onResolve={({ provider, data }) => {
          console.log(data);
          setUser(data) ;

        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
      <div>
        
      </div>
        </div>


    </div> );
}
 
export default Login;