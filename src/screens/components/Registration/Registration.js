import React, {useState} from "react";
import './Registration.css'
import {useForm} from "react-hook-form";
import axios from "axios";
import {isLoggedIn, STUDENTS_REGISTRATION} from "../../../api-services/Api";
import {Link, Navigate, Route, useNavigate} from "react-router-dom";

export default function Registration () {

     const [getEmail, setEmail] = useState('');
     const [auth, setAuth] = useState('');

     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');

     const [error, setError] = useState('');
     const [isCheckboxSelected, setCheckboxSelection] = useState('');

     let [isValidated] = useState('false');

    // localStorage.setItem('uuid', response.uuid);
    // localStorage.setItem('username', response.username);

    const {
        control,
        register,
        handleSubmit,
        formState: {isSubmitted, errors},
    } = useForm({
        mode: 'all',
        defaultValues:{
            email: '',
            password: '',
            confirmPassword:'',
        }
    })

    const passwordCharacters = (value) => {
        const characters = new RegExp( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*['!"#$%&'()*+,/\-.:;<=>?@[\]^_`{|}~']).{8,}$/);
        return  isValidated = characters.test(value) ? isValidated : errors
    }

    const passwordValidation =  (value) => {
        return console.log('process incomplete', value)
    }


    const termsAndConditions = "I consent to share my data for the purpose of this academic project research."+ "\n"+
                                       "The information provided will be handled in accordance with GDPR regulations." ;


    const acceptDataUseBox = (acceptedTerms) => {
        return setCheckboxSelection(acceptedTerms.target.checked) && setError('');
    }

    const navigate = useNavigate();
    const redirectUser = (email) => {
        const fillEmailInput = email;
        return navigate('/login');
    }

    const onSubmit = async (data) => {
        if (Object.keys(data).length !== 0 && isCheckboxSelected) {
            await axios
                .post(STUDENTS_REGISTRATION + "?username=" + data.email + "&password=" + data.password)
                .then ((response) => {
                        console.log('Posted:', response.data);
                        redirectUser(setEmail(response.data.email));
                    }
                )
                .catch((error) => {
                    console.log(error);
                })

        }
        setError('Error in registration, please check your information again or accept terms of use');
    }

    return(
        <div className="background">
            <div className="loginWrapper">
                <h1 className="headerRegistration"> Registration </h1>

                <div className="input-wrapper">
                    <input
                        {...register("email", {required: true}) }
                        autoCapitalize={'off'}
                        placeholder="Email"
                        type="email"
                        className="input-registration"
                        maxLength={50}
                    />
                </div>

                <div className="input-wrapper">
                    <input
                        {...register("password", {required: true}) }
                        placeholder="Password"
                        type="password"
                        className="input-registration"
                        autoComplete={'false'}
                    />
                </div>

                <div className="input-wrapper">
                    <input
                        {...register("confirmPassword", {required: true}) }
                        placeholder="Confirm Password"
                        type="password"
                        className="input-registration"
                        autoComplete={'false'}
                    />
                    { }
                </div>

               <form className={'submission'} onSubmit={handleSubmit(onSubmit)}>
                   <div className={"checkbox-wrapper"}>
                       <input
                           type={'checkbox'}
                           onChange={acceptDataUseBox}
                       />
                       <p className={'checkbox-legend'}>{termsAndConditions}</p>
                   </div>

                   <input
                       type ={'Submit'}
                       className={'submission'}
                   />
                   {error && <p className={'error'}>{error}</p>}
               </form>


            </div>
        </div>
    );
}



