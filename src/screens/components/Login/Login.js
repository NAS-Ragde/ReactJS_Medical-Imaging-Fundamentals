import './Login.css';

function Login() {
    return (
        <div className="background">
            <div className="loginWrapper">
                <h1 className="header"> Fundamentals of Medical Imaging Management </h1>
                <input placeholder="User" className="textInput"/>
                <input placeholder="Password" type="password" className="textInput"/>
                <span
                    className="login"
                    //onClick={() => navigation.navigate('Home')}
                >
                    Login
                </span>
                <p className={"text"}> Dont you have an account? {
                    <span
                    className="sign-in"
                    //onClick={() => navigation.navigate('Home')}
                >
                    Sign in
                </span>} </p>

            </div>
        </div>
    );
}

export default Login;
