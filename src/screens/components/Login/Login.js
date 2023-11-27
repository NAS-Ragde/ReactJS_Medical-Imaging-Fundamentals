import React, {useEffect, useState} from "react";
import './Login.css';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import {LOGIN, STORAGE_KEY} from "../../../api-services/Api";
export default function Login() {

    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitted }
    } = useForm({
        mode: 'all',
        defaultValues:{
            email: '',
            password: '',
        }
    })

    useEffect(()=> {
        errors? setError('Empty credentials are not valid for login.'):  setError('');
    },[errors,setError])

    const navigate = useNavigate();
    const redirectUser = () => {
        navigate('/home');
        navigate(0);
    }

    const login =async (data) => {
        console.log(data);
        if (Object.keys(data.length !== 0)) {

            await axios
                .get(LOGIN + "?username=" + data.email + "&password=" + data.password)
                .then ((response) => {
                    localStorage.setItem(STORAGE_KEY.UUID, response.data);
                    localStorage.setItem(STORAGE_KEY.USERNAME, data.email);
                })
                .then(() => {
                    redirectUser()
                })
                .catch((error) => {
                    console.log(error);
                })

        } setError('Error in Login, please verify your account');
    }

    return (
        <div className="background">
            <div className="loginWrapper">
                <h1 className="headerLogin"> Fundamentals of Medical Imaging Management Course </h1>

                <input
                    {...register("email", {required: true}) }
                    placeholder="User"
                    className="textInput"
                    max={50}
                />

                <input
                    {...register("password", {required: true}) }
                    placeholder="Password"
                    type="password"
                    className="textInput"
                    max={30}
                />

                <form
                    className={'login'}
                >
                    <span className={'login'}  onClick={handleSubmit(login)}>Login</span>
                    {isSubmitted && errors && <p className={'error-login'}>{error}</p>}
                </form>

                <p className={"sign-in-text"}> Dont you have an account? {
                    <span className="sign-in" onClick={()=> navigate('/registration') } >Sign up </span>
                    }
                </p>
            </div>
        </div>
    );
}


