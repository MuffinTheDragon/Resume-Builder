import React from 'react';
// import { useHistory } from "react-router-dom";
import "./Login.css";

import GoogleButton from 'react-google-button';
const Login = (props) => {
    
    // const history = useHistory();
    
    const signInWithGoogle = () => {
        fetch("/google").then(response => window.location.href = '/')
    }

        return (
            <div className="loginComp">
                <div className="loginButton">
                    <GoogleButton onClick={signInWithGoogle} />
                </div>
            </div>
        )
}
export default Login;