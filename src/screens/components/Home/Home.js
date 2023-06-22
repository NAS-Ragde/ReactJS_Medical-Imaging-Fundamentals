import React, {useEffect, useState}  from "react";
import './Home.css'
import axios from "axios";
import {CHAPTERS} from "../../../api-services/Api";
export default function Home() {

    const [chapters, setChapters] = useState([]);
    const welcomeText = 'This course is prepared to give you fundamental insights about Medical Imaging.';

    localStorage.getItem('uuid');
    localStorage.getItem('username');

    const requestChapters = () => {
        useEffect(() => {
                axios
                    .get(CHAPTERS)
                    .then((response) => {
                        const chapters = response.data.map((chapter) => [chapter.id, chapter.title]);
                        setChapters(chapters) ;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            []);
    }

    const ListOfChapters = () => {
        requestChapters();
        return (
            <table className={'table'} >
                <tbody>
                {
                    chapters.map((chapter) => (
                            <tr key={chapter.id}  className={'tr-text'} >
                                <td className={'list-id'}>{ chapter.id}. </td>
                                <td className={'list-title'}>{ chapter.title }</td>
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
