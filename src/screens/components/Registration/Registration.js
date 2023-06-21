import React, {useState} from "react";
import './Registration.css'
import {useForm} from "react-hook-form";
export default function Registration () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    let [isValidated] = useState('false');

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

    const passwordValidation = (value) => {
        return console.log('process incomplete', value)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div className="background">
            <div className="loginWrapper">
                <h1 className="header"> Registration </h1>

                <input
                    {...register("email", {required: true}) }
                    autoCapitalize={'off'}
                    placeholder="Email"
                    className="textInput"
                    maxLength={50}
                />

                <input
                    {...register("password", {required: true}) }
                    placeholder="Password"
                    type="password"
                    className="textInput"
                    autoComplete={'false'}
                />

                <input
                    {...register("confirmPassword", {required: true}) }
                    placeholder="Confirm Password"
                    type="password"
                    className="textInput"
                    autoComplete={'false'}
                />

                <span className={'submission'} onSubmit={handleSubmit(onSubmit)}>Submit</span>


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



