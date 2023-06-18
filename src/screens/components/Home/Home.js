import './Home.css'

export default function Home() {

    const welcomeText = 'This course is prepared to give you fundamental insights about Medical Imaging.';

    const chapters = [{
        "id": 1,
        "title": "Introduction to medical imaging and its modalities",
        "contents": [{
            "id": 1,
            "title": "Image acquisition and techniques",
            "text": "Test Content",
            "image": null,
            "parentContent": null
        }, {
            "id": 2,
            "title": "General Image quality Requirements",
            "text": "Test Content",
            "image": null,
            "parentContent": null
        }, {
            "id": 3,
            "title": "Magnetic resonance imaging",
            "text": "Test Content",
            "image": null,
            "parentContent": {
                "id": 2,
                "title": "General Image quality Requirements",
                "text": "Test Content",
                "image": null,
                "parentContent": null
            }
        }, {
            "id": 4,
            "title": "Radiography",
            "text": "Test Content",
            "image": null,
            "parentContent": {
                "id": 2,
                "title": "General Image quality Requirements",
                "text": "Test Content",
                "image": null,
                "parentContent": null
            }
        }, {
            "id": 5,
            "title": "Computer tomography",
            "text": "Test Content",
            "image": null,
            "parentContent": {
                "id": 2,
                "title": "General Image quality Requirements",
                "text": "Test Content",
                "image": null,
                "parentContent": null
            }
        }, {
            "id": 6,
            "title": "Ultrasound",
            "text": "Test Content",
            "image": null,
            "parentContent": {
                "id": 2,
                "title": "General Image quality Requirements",
                "text": "Test Content",
                "image": null,
                "parentContent": null
            }
        }]
    }, {"id": 2, "title": "Digital imaging: Formats, compression, store and visualization", "contents": []}, {
        "id": 3,
        "title": "Standard DICOM",
        "contents": []
    }, {"id": 4, "title": "Picture archiving and communication systems", "contents": []}]

    const ListOfChapters = ({chapters}) => {
        return (
            <div className={'content-list'}>
                {
                    chapters.map((chapters) => (
                            <li key={chapters.id} className={'text'}>
                                <span className={'id'}>{ chapters.id }{'\n'}</span>
                                <span className={'title'}>{ chapters.title }{'\n'}</span>
                            </li>
                        )
                    )
                }

            </div>
        );

    }

    const Footer = () => {
        return (
            <div className={'footer'}>
                <p className={'footerText'}>© 2023 Nayeli A. Silva, Inc.</p>
            </div>
        );
    };


    return (
        <div className={'container'}>

            <div className={'textWrapper'}>
                <h1 className={'header'}>Welcome!</h1>
                <h3 className={'textHeader'}>{welcomeText}</h3>
            </div>

            {/* Wrapper to show quiz */}

            <div className={'textWrapper'}>
                <ListOfChapters chapters={chapters}/>
            </div>

            <span className={'start-button'}>
                Get Started
            </span>

            <div>
                {<Footer/>}
            </div>

        </div>

    );
}

