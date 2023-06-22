import React, {useState} from "react";
import './Login.css';
import {useNavigate} from "react-router-dom";

export default function Login() {

    const [userName, setUsername] = useState ();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const login =() => {

    }

    return (
        <div className="background">
            <div className="loginWrapper">
                <h1 className="headerLogin"> Fundamentals of Medical Imaging Management </h1>
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

                <span className={'login'} onSubmit={login}>Login</span>


                <p className={"sign-in-text"}> Dont you have an account? {
                    <span className="sign-in" onClick={()=> navigate('/registration') } >Sign in </span>
                    }
                </p>

            </div>
        </div>
    );
}


