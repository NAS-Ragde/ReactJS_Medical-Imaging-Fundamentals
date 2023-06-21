import React, {useState} from "react";
import './Registration.css'
export default function Registration () {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return(
        <div className="background">
            <div className="loginWrapper">
                <h1 className="header"> Registration </h1>
                <input
                    placeholder="Name"
                    className="textInput"
                    onChange={()=> setUsername()}
                    value={username}
                />
                <input
                    placeholder="Email"
                    className="textInput"
                    onChange={()=>{setEmail()} }
                    value={email}
                />
                <input
                    placeholder="Password"
                    type="password"
                    className="textInput"
                    onChange={()=> setPassword()}
                    value={password}
                />
                <input
                    placeholder="Confirm Password"
                    type="password"
                    className="textInput"
                    onChange={()=> setConfirmPassword()}
                    value={confirmPassword}
                />

                <span className={'submission'}>Submit</span>

            </div>
        </div>
    );
}
