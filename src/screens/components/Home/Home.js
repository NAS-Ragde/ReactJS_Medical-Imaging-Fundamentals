import React, {useEffect, useState}  from "react";
import './Home.css'
import axios from "axios";
import {CHAPTERS} from "../../../api-services/Api";
export default function Home() {

    const RequestChapters = () => {
        useEffect(() => {
            axios
                .get(CHAPTERS)
                .then( (chapters) => {
                    console.log(chapters.data);
                })
                .catch((error) =>{
                    console.log(error);
                })
        }, []);
    }

    const welcomeText = 'This course is prepared to give you fundamental insights about Medical Imaging.';

    const ListOfChapters = ({chapters}) => {
        return (
            <table className={'table'} >
                <tbody>
                {
                    chapters.map((chapters) => (
                            <tr key={chapters.id}  className={'tr-text'} >
                                <td className={'list-id'}>{ chapters.id}. </td>
                                <td className={'list-title'}>{ chapters.title }</td>
                                <td className={'list-status'}>Status</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        );

    }

    return (
        <div>
            <div className={'header'}>
                <p className={'header-title'}>Home</p>
                <p className={'header-title'}>Exit
                    <button
                        className={'logout-button'}
                        onClick={()=>{}}
                    />
                </p>

            </div>

            <div className={'container'}>

                <div className={'textWrapper'}>
                    <h1 className={'welcome'}>Welcome,</h1>
                    <p className={'course-text'}>{welcomeText}</p>
                </div>

                <div className={'textWrapper'}>
                    <ListOfChapters chapters={RequestChapters}/>
                </div>

                <span className={'start-button'}> Get Started </span>

            </div>

            <div className={'footer'}>
                <p className={'footerText'}>© 2023 Nayeli A. Silva, Inc.</p>
            </div>

        </div>


    );
}

