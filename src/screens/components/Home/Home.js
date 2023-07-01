import React, {useEffect, useMemo, useState} from "react";
import './Home.css'
import axios from "axios";
import {CHAPTERS, STORAGE_KEY} from "../../../api-services/Api";
import {useNavigate} from "react-router-dom";
import {Progress} from "antd";

export default function Home() {

    const [chapters, setChapters] = useState([]);
    const welcomeText = 'This course is prepared to give you fundamental insights about Medical Imaging.';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =
                    await axios.get(CHAPTERS + '?uuid=' + localStorage.getItem(STORAGE_KEY.UUID) + '&username=' + localStorage.getItem(STORAGE_KEY.USERNAME));
                setChapters(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);

    const ListOfChapters = ({item}) => {
        return (
            <table className={'table'}>
                <tbody>
                {
                    chapters.map((item, index) =>
                        (
                            <tr key={`${item.id}-${index}`} className="tr-text">
                                <td className="list-id">Chapter {item.chapter.id}.</td>
                                <td className="list-title">{item.chapter.title}</td>
                                <td className="list-status">{item.status
                                    ? (<div className={'progress-bar'}> <Progress percent={100} size="small"  /></div>)
                                    : (<div className={'progress-bar'}> <Progress percent={1} size="small" status={'exception'} /></div>)
                                }</td>
                            </tr>
                        ))
                }

                </tbody>
            </table>
        );

    }

    const logout = () => {
        localStorage.removeItem(STORAGE_KEY.UUID);
        localStorage.removeItem(STORAGE_KEY.USERNAME);
        navigate('/Login');
        navigate(0);
        // localStorage.removeItem('user');
    }

    const navigate = useNavigate();

    return (
        <div>
            <div className={'header'}>
                <p className={'header-title'}>Home</p>
                <button
                    className={'logout-button'}
                    onClick={logout}
                />
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

