import React, {useEffect, useMemo, useState} from "react";
import './Home.css'
import axios from "axios";
import {CHAPTERS} from "../../../api-services/Api";

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
                                <td className="list-id">{JSON.stringify(item.chapter.id)}.</td>
                                <td className="list-title">{JSON.stringify(item.chapter.title)}</td>
                                <td className="list-completed">{item.completed ? 'Completed' : 'Uncompleted'}</td>
                            </tr>
                        ))
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
                        onClick={() => {
                        }}
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

                <span className={'start-button'}> Get Started </span>

            </div>

            <div className={'footer'}>
                <p className={'footerText'}>© 2023 Nayeli A. Silva, Inc.</p>
            </div>

        </div>


    );
}


/*
  const Mock_Chapters = () => {
        const data = [
        {"id": 1, "title": "Introduction to digital imaging", "contents": []},
        {"id": 2, "title": "Digital imaging: Formats, compression, store and visualization", "contents": []},
        {"id": 3, "title": "Standard DICOM", "contents": []},
        {"id": 4, "title": "Picture archiving and communication systems", "contents": []},
        {"id": 5, "title": "AAAAAAAAAAAAAAAAAAAAAAAA", "contents": []}
        ]

    return data;
}
 */
