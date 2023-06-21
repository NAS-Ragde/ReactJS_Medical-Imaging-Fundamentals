import React, {useState} from "react";
import './Login.css';

// const handleSubmit =() => {
//
// }
export default function Login() {

    const [userName, setUsername] = useState ();
    const [password, setPassword] = useState();


    return (
        <div className="background">
            <div className="loginWrapper">
                <h1 className="header"> Fundamentals of Medical Imaging Management </h1>
                <input
                    placeholder="User"
                    className="textInput"
                    onChange={()=> setUsername('true')}
                    value={userName}
                />
                <input
                    placeholder="Password"
                    type="password"
                    className="textInput"
                    onChange={()=> setPassword('true')}
                    value={password}
                />

                <span className={'login'}>Login</span>


                <p className={"text"}> Dont you have an account? {
                    <span className="sign-in"> Sign in </span>
                    }
                </p>

            </div>
        </div>
    );
}


