import './Content.css'
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Drawer, Pagination} from "antd";

export default function Content() {

    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);
    const [indexMenu, setIndexMenu] = useState();
    const showDrawer = () => {
        setOpenMenu(true);
    };

    const closeDrawer = () => {
        setOpenMenu(false);
    };

    const menuChapterOne = () => {
        return(
            <div className={'nav-menu-content'}>
                <h3>CHAPTER 1. INTRODUCTION TO MEDICAL IMAGING AND ITS MODALITIES</h3>
                <ul>
                    <li>Image acquisition and techniques</li>
                    <li>General image quality requirements</li>
                    <ul>
                        <li>Radiography</li>
                        <li>Magnetic Resonance Imaging</li>
                        <li>Computer Tomography</li>
                        <li>Ultrasound</li>
                        <li>Nuclear medicine imaging</li>
                    </ul>
                </ul>
            </div>
        );
    }

    const menuChapterTwo = () => {
        return(
            <div className={'nav-menu-content'}>
                <h3>CHAPTER 2. DIGITAL IMAGING: FORMATS, COMPRESSION, STORE AND VISUALIZATION</h3>
                <ul>
                    <li>Image Format</li>
                    <li>Image Compression</li>
                    <li>Image Storage</li>
                    <li>Medical Image Viewers</li>
                    <li>Additional Resources</li>
                </ul>
            </div>
        );
    }

    const menuChapterThree = () => {
        return(
            <div className={'nav-menu-content'}>
                <h3>CHAPTER 3. STANDARD DICOM</h3>
                <ul>
                    <li>Introduction to DICOM as standard</li>
                    <li>DICOM Network communication</li>
                    <li>DICOM Services and SOP classes</li>
                    <li>DICOM Data Elements</li>
                </ul>

            </div>
        );
    }

    const menuChapterFour = () => {
        return(
            <div className={'nav-menu-content'}>
                <h3>CHAPTER 4. PICTURE ARCHIVING AND COMMUNICATION SYSTEMS</h3>
                <ul>
                    <li>Introduction to PACS</li>
                    <li>Prerequisites and components of PACS</li>
                    <li>PACS architecture</li>
                    <li>PACS workflow</li>
                </ul>
            </div>
        );
    }

    const menuChapterFive = () => {
        return(
            <div className={'nav-menu-content'}>
                <h3>CHAPTER 5. PRACTICAL ACTIVITY</h3>
                <ul>
                    <li>Dockerizing toolkit DICOM4CHE</li>
                </ul>
            </div>
        );
    }

     // const chapterContent = fetchContent();

    return (
        <div>
            <div className={'header-Page'}>

                <button
                    className={'home-button'}
                    onClick={() => navigate('/home')}
                />
                <p className={'header-title'}>Chapter I. Introduction </p>
                <button
                    className={'nav-menu-Button'}
                    onClick={showDrawer}
                />

                <Drawer title="Content" placement="right" onClose={closeDrawer} open={openMenu}>
                    {menuChapterOne()}
                    {menuChapterTwo()}
                    {menuChapterThree()}
                    {menuChapterFour()}
                    {menuChapterFive()}
                </Drawer>

            </div>

            <div className={'soft-container'}>
                <div className={'body-container'}>
                    <h1 className={'title'} >  title:  </h1>
                    <p className={'subtitle'}>  subtitle:  </p>
                    <p className={'text'}>  text: </p>

                    <div className={'pagination'}>
                        <Pagination defaultCurrent={1} total={50}/>
                    </div>
                </div>

            </div>


            <div className={'footer-content'}>
                <p className={'footerText'}>© 2023 Nayeli A. Silva, Inc.</p>
            </div>

        </div>
);
}
