import React, {useState} from "react";
import './Registration.css'
import {useForm} from "react-hook-form";
import axios from "axios";
import {STUDENTS_REGISTRATION} from "../../../api-services/Api";
import {Link} from "react-router-dom";
export default function Registration () {

     const [getEmail, setEmail] = useState('');

     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
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

    const readdressing = () => {
        return (
            <Link to = "../Home/Home.js" />
        );
    }

    const onSubmit = async (data) => {
        console.log(data);

        if (Object.keys(data.length !== 0)) {

            await axios
                .post(STUDENTS_REGISTRATION + "?username=" + data.email + "&password=" + data.password)
                .then ((response) => {
                        console.log('Posted:', response.data);
                        setEmail(response.data.email);
                        readdressing();
                    }
                )
                .catch((error) => {
                    console.log(error);
                })

    }}

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
                   <input
                       type ={'Submit'}
                       className={'submission'}
                   />
               </form>


            </div>
        </div>
    );
}


//
//     ()=> {
//         passwordCharacters(password)
//             ? setPassword(password)}
//             : console.log('error in characters')}
//   }


//
//    ()=> {
//        passwordValidation(confirmPassword)}
//       }
//



