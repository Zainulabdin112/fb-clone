import React from 'react';
import "./Login.css";
import button from   '@material-ui/icons/ChatBubbleOutline';


function Login() {
    const signIn = () => {
        //sign in ...
    };
    
    return (
        <div className="login"> 
            <div className="login_logo">
                  < img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/800px-Facebook_f_Logo_%28with_gradient%29.svg.png"

                   alt=""/>

                    <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""></img>

                    
            </div>
            <button type="submit" onClick={signIn}>
             Sign In
            </button>
        </div>
    )
}

 export default Login
