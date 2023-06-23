import React, {useEffect, useMemo, useState} from "react";
import './Home.css'
import axios from "axios";
import {CHAPTERS} from "../../../api-services/Api";
import {useNavigate} from "react-router-dom";

export default function Home() {

    const [chapters, setChapters] = useState([]);
    const welcomeText = 'This course is prepared to give you fundamental insights about Medical Imaging.';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =
                    await axios.get(CHAPTERS + '?uuid=' + localStorage.getItem('uuid') + '&username=' + localStorage.getItem('username'));
                setChapters(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);

    const ListOfChapters = () => {
        return (
            <table className={'table'}>
                <tbody>
                {
                    chapters.map((item, index) =>
                        (
                            <tr key={`${item.id}-${index}`} className="tr-text">
                                <td className="list-id">{item.chapter.id}.</td>
                                <td className="list-title">{item.chapter.title}</td>
                                <td className="list-completed">{item.completed ? 'Completed' : 'Uncompleted'}</td>
                            </tr>
                        ))
                }

                </tbody>
            </table>
        );

    }

    const logout = () => {
        localStorage.removeItem('uuid');
        navigate('/Login');
        navigate(0);
        // localStorage.removeItem('user');
    }

    const navigate = useNavigate();

    return (
        <div>
            <div className={'header'}>
                <p className={'header-title'}>Home</p>
                <p className={'header-title'}>Exit
                    <button
                        className={'logout-button'}
                        onClick={logout}
                    />
                </p>

            </div>

            <div className={'container'}>

                <div className={'textWrapper'}>
                    <h1 className={'welcome'}>Welcome,</h1>
                    <p className={'course-text'}>{welcomeText}</p>
                </div>

                <div className={'textWrapper'}>
                    <ListOfChapters/>
                </div>

                <span className={'start-button'}  onClick={()=> navigate('/content')}> Get Started </span>

            </div>

            <div className={'footer'}>
                <p className={'footerText'}>© 2023 Nayeli A. Silva, Inc.</p>
            </div>

        </div>


    );
}

