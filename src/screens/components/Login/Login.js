import './Login.css';

function Login() {
    return (
        <div className="background">
            <div className="loginWrapper">
                <h1 className={"text"}> Fundamentals of Medical Imaging Management </h1>
                <input placeholder="User" className="textInput" />
                <input placeholder="Password" type="password" className="textInput" />
                <button
                    className="button"
                    //onClick={() => navigation.navigate('Home')}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
