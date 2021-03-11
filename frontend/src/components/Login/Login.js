import React from 'react';
// import { useHistory } from "react-router-dom";

import GoogleButton from 'react-google-button';
const Login = (props) => {
    
    // const history = useHistory();
    
    // const signInWithGoogle = () => {
    //     history.push('/google')
    // }

        return (
            <div>
                <GoogleButton onClick={() => window.location.href='/google'} />
            </div>
        )
}
export default Login;