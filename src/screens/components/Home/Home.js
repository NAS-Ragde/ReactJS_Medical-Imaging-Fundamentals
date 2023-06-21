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
            <table className={'table'} >
                <tbody>
                {
                    chapters.map((chapters) => (
                            <tr key={chapters.id}  className={'tr-text'} >
                                <td className={'list-id'}>{ chapters.id}. </td>
                                <td className={'list-title'}>{ chapters.title }</td>
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
                <p className={'header-title'}>Exit</p>

            </div>

            <div className={'container'}>

                <div className={'textWrapper'}>
                    <h1 className={'welcome'}>Welcome,</h1>
                    <p className={'course-text'}>{welcomeText}</p>
                </div>

                <div className={'textWrapper'}>
                    <ListOfChapters chapters={chapters}/>
                </div>

                <span className={'start-button'}> Get Started </span>

            </div>

            <div className={'footer'}>
                <p className={'footerText'}>© 2023 Nayeli A. Silva, Inc.</p>
            </div>

        </div>


    );
}

