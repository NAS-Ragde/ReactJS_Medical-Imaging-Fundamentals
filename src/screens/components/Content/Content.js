import './Content.css'
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import fetchContent from "../../../api-services/fetchContent";
import {rewriteURIForGET} from "@apollo/client";

export default function Content() {
    const chapterContent = fetchContent()

    const navigate = useNavigate();

    return (
        <div>
            <div className={'header'}>
                <p className={'headerContent'}>Chapter </p>
                    <button
                    className={'homeButton'}
                    onClick={() => navigate('/home')}
                />
            </div>

            <div className={'soft-container'}>
                <div className={'body-container'}>
                    <h1 className={'title'} >  title: </h1>
                    <p className={'subtitle'}>  subtitle:  </p>
                    <p className={'text'}>  text: </p>
                </div>
            </div>


            <div className={'footer-content'}>
                <p className={'footerText'}>© 2023 Nayeli A. Silva, Inc.</p>
            </div>

        </div>
);
}
