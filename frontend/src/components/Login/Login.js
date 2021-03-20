import React from 'react';
// import { useHistory } from "react-router-dom";
import "./Login.css";

import GoogleButton from 'react-google-button';
const Login = (props) => {
    
    // const history = useHistory();
    
    // const signInWithGoogle = () => {
        


    //     const request = new Request(`/google`, {
    //         method: "get",
    //     });
    //     fetch(request)
    //         .then(res => {
    //             if (res.status === 200){
    //             // register successful
    //             // decide what to do after user clicks register
    //                 console.log("User logged in!")
    //                 window.location.href = '/'
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })        
    // }

        return (
            <div className="loginComp">
                <div className="loginButton">
                    <GoogleButton onClick={() => window.open("http://localhost:5000/google", "_self")} />
                </div>
            </div>
        )
}
export default Login;