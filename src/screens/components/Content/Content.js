import './Content.css'
import React from "react";
import {useNavigate} from "react-router-dom";

const subtitle1 =
    'Since the discovery of radioactive elements like Radium and Polonium by Marie Curie, and the experiments conducted by Wilhelm C. Rontgen which consist of passing electric beams through different objects and recording its differential of density in graphic plates, the use of radiation and X-Rays has transformed the medical field by allowing visualization of anatomical structures within the human body.'+'\n\n'+
    'The acquisition of medical images began with the use of plates, which are flexible sensor films that captures radiation emitted by a beam. Photographic films were commonly employed for recording medical images until the 1980s.'+'\n\n' +
    'Nowadays the medical imaging field offers several techniques and medical equipment to produce medical images in digital format.  These include Computer Tomography (1960), Positron Emission Tomography (1977), Magnetic Resonance Image (1980) and others. With the increasing variety of devices available in the market the need to standardize the information produced by each device emerged. This need was addressed with the development of DICOM standard, which will be discussed in the upcoming chapters of this course.\n\n'

export default function Content() {
    const navigate = useNavigate();

    return (
        <div>

            <div className={'header'}>
                <p className={'headerContent'}>Chapter 1</p>
                <button
                    className={'homeButton'}
                    onClick={() => navigate('/home')}
                />
            </div>

            <div className={'soft-container'}>
                <div className={'body-container'}>
                    <h1 className={'title'} > Introduction to Medical Imaging and its modalities </h1>
                    <p className={'subtitle'}> Image acquisition and techniques  </p>
                    <p className={'text'}>{subtitle1}</p>
                </div>
            </div>


            <div className={'footer-content'}>
                <p className={'footerText'}>© 2023 Nayeli A. Silva, Inc.</p>
            </div>

        </div>
);
}
