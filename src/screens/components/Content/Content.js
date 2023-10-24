import './Content.css'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Drawer, Modal, Pagination} from "antd";
import axios from "axios";
import {CHAPTERS, DICOM4CHE_ADDRESS, QUIZZES, STORAGE_KEY, VIEWER_ADDRESS} from "../../../api-services/Api";
import _ from "lodash";
import SurveyComponent from "../Quizzes/InitialQuiz/initialQuiz";
import {chapterStartPage} from "../Quizzes/InitialQuiz/json";

export default function Content() {

    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);
    const [chapters, setChapters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [getQuiz, setQuiz] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const showDrawer = () => {
        setOpenMenu(true);
    };

    const closeDrawer = () => {
        setOpenMenu(false);
    };

    const openViewer = () => {
        const url = VIEWER_ADDRESS + '/oviyam';
        window.open(url, '_blank');
    }

    const openPacsServer = () => {
        const url = DICOM4CHE_ADDRESS + '/dcm4chee-arc/ui2/';
        window.open(url, '_blank');
    }


    const menuChapterOne = () => {
        return (
            <div className={'nav-menu-content'}>
                <h3 className={'content-title'}>CHAPTER 1. INTRODUCTION TO MEDICAL IMAGING AND ITS MODALITIES</h3>
                <ul>
                    <li>General image quality requirements</li>
                    <li>Image acquisition and techniques</li>
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
        return (
            <div className={'nav-menu-content'}>
                <h3 className={'content-title'}>CHAPTER 2. DIGITAL IMAGING: FORMATS, COMPRESSION, STORE AND
                    VISUALIZATION</h3>
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
        return (
            <div className={'nav-menu-content'}>
                <h3 className={'content-title'}>CHAPTER 3. STANDARD DICOM</h3>
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
        return (
            <div className={'nav-menu-content'}>
                <h3 className={'content-title'}>CHAPTER 4. PICTURE ARCHIVING AND COMMUNICATION SYSTEMS</h3>
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
        return (
            <div className={'nav-menu-content'}>
                <h3 className={'content-title'}>CHAPTER 5. PRACTICAL ACTIVITY</h3>
                <ul>
                    <li>Quizzes</li>
                    <li className={'removal-bullets'}>
                        <button className={'link-button'} onClick={() => openViewer()}>
                                  <span className="circle" aria-hidden="true">
                                  <span className="icon arrow"></span>
                                  </span>
                            <span className="button-text">Medical Viewer</span>
                        </button>
                    </li>
                    <li className={'removal-bullets'}>
                        <button className={'link-button'} onClick={() => openPacsServer()}>
                                <span className="circle" aria-hidden="true">
                                  <span className="icon arrow"></span>
                                  </span>
                            <span className="button-text">PACS Server</span>
                        </button>
                    </li>
                </ul>
            </div>
        );
    }

    /* Fetch Content */

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response =
                    await axios.get(CHAPTERS + '?uuid=' + localStorage.getItem(STORAGE_KEY.UUID) + '&username=' + localStorage.getItem(STORAGE_KEY.USERNAME));
                setChapters(response.data);

            } catch (error) {
                console.log(error)
            }
        };
        fetchContent();
    }, []);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response =
                    await axios.get(QUIZZES + '?uuid=' + localStorage.getItem(STORAGE_KEY.UUID) + '&username=' + localStorage.getItem(STORAGE_KEY.USERNAME));
                setQuiz(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchQuizzes();
    }, []);

    const handleQuizSelection = (quiz) => {
        setSelectedQuiz(quiz.id);
        setIsModalVisible(true);
    }

    const handleContentFromChapter = () => {
        const pagePerChapter = 1;
        const totalChapters = chapters.length;
        const totalPages = Math.ceil(totalChapters / pagePerChapter);

        const currentPageChapters = _.slice(
            chapters,
            (currentPage - 1) * pagePerChapter,
            currentPage * pagePerChapter
        );

        return currentPageChapters.map(({chapter}, index) => {
            const chapterIndex = (currentPage - 1) * pagePerChapter + index;
            const isLastContentLastPage = chapterIndex === totalChapters - 1;

            return (
                <div key={index}>
                    <h1 className={'title'}> {chapter.title} </h1>
                    <p className={'subtitle'}> {chapter.contents[0].title} </p>
                    <p className={'text'} dangerouslySetInnerHTML={{__html: chapter.contents[0].text}}></p>

                     {isLastContentLastPage && (
                        <>
                            <div  className={'button-container'}>
                                {
                                    getQuiz.map((quizInfo) => (

                                    <button className={'link-button'} key={quizInfo.quiz.id} onClick={() => handleQuizSelection(quizInfo.quiz)}>
                                    <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text"> {quizInfo.quiz.title}</span>
                                    </button>
                                    ))
                                }

                            </div>

                            {
                                isModalVisible && selectedQuiz && (
                                    <Modal
                                        open={isModalVisible}
                                        onOk={() => setIsModalVisible(false)}
                                        onCancel={() => setIsModalVisible(false)}
                                        okText="Submit"
                                        maskClosable={false}
                                        width={1500}
                                    >
                                        <SurveyComponent quizzes={getQuiz} quizId={selectedQuiz} startPage={chapterStartPage}/>
                                    </Modal>
                                )
                            }

                            <div className={'button-container'}>
                                <button className={'link-button'} onClick={() => openViewer()}>
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Medical Viewer</span>
                                </button>

                                <button className={'link-button'} onClick={() => openPacsServer()}>
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">PACS Server</span>
                                </button>
                            </div>

                        </>
                   )}
                </div>
            );
        });
     };

    return (
        <div>
            <div className={'header-Page'}>

                <button
                    className={'home-button'}
                    onClick={() => navigate('/home')}
                />
                <p className={'header-title'}>Content </p>
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
                    {handleContentFromChapter()}

                    <div className={'pagination'}>
                        <Pagination
                            current={currentPage}
                            pageSize={1}
                            total={chapters.length}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>


            <div className={'footer-content'}>
                <p className={'footerText'}>© 2023 Nayeli A. Silva, Inc.</p>
            </div>

        </div>
    );
}
