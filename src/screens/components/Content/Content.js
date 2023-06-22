import './Content.css'
import React from "react";

const header = () => {

}
export default function Content() {
    return (
        <div>

            <div className={'header'}>
                <p className={'headerContent'}>Chapter 1</p>
                <button
                    className={'homeButton'}
                    onClick={() => {}}
                />
            </div>


            <div className={'container'}>
                <h1 className={'title'} > Introduction to Medical Imaging and its modalities </h1>
                <p className={'subtitle'}> Image acquisition, techniques and digitisation </p>
                <p className={'text'}> Since the discovery of Marie Currie of radioactive elements alike Radium and Polonium, along with the experiments of Wilhelm C. Röntgen and electric beams passed through different objects recorded its differential of density in graphic plates; the use of radiation and X-Rays became the breakthrough in the medical field for showing anatomical structures from patient’s body.
                </p>
            </div>



            <div className={'footer'}>
                <p className={'footerText'}>© 2023 Nayeli A. Silva, Inc.</p>
            </div>

        </div>
);
}
