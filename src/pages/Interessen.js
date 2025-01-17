import '../index.css';


import int from '../images/interest/interest.jpg';

import int1 from '../images/interest/politics.jpg';
import int2 from '../images/interest/art.jpg';
import int3 from '../images/interest/technology.jpg';
import int4 from '../images/interest/music.jpg';
import int5 from '../images/interest/lyricism.png';
import int6 from '../images/interest/philosophy.jpg';
import int7 from '../images/interest/videoediting.jpg';
import int8 from '../images/interest/psychology.jpg';
import int9 from '../images/interest/gaming.jpg';


import { useNavigate } from 'react-router-dom';

export default function Interessen() {

    const interessenImages = [
        int1, int2, int3, int4, int5, int6, int7, int8, int9
    ];

    const interessenTexte = [
        <p>Politik</p>,
        <p>Kunst</p>,
        <p>Technologie</p>,
        <p>Musik</p>,
        <p>Lyrik</p>,
        <p>Philosophie</p>,
        <p>Videobearbeitung</p>,
        <p>Psychologie</p>,
        <p>Gaming</p>
    ];

    const navigate = useNavigate();

    const handleNavButton = (newPage) => {
        navigate(newPage);
    }

    return (
        <div>
            <div id='Interessen-nav' style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <ul>
                        <li className='Nav-list' style={{ position: "absolute", left: "0" }}>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/")}><p>Gian Oechslin</p><p>Gian Oechslin</p><p>Gian Oechslin</p></div>
                        </li>
                        <li className='Nav-list'>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/Kontakt")}><p>Kontakt</p><p>Kontakt</p><p>Kontakt</p></div>
                        </li>
                        <li className='Nav-list'>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/Referenzen")}><p>Referenzen</p><p>Referenzen</p><p>Referenzen</p></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='Title'>
                <h1>Interessen</h1>
            </div>
            <div>
                <div style={{ height: '50vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ zIndex: '1', width: '45%' }}>Auf dieser Seite können Sie eine Galerie meiner Interessen sehen. Zugegeben war es sehr schwierig diese Galerie zusammenzustellen, da meine Interessen vielseitig und teilweise nicht wirklich vernünftig in einem Foto zusammenzufassen sind. Beim hovern über die Bilder erscheint eine kurze Beschreibung. Somit wird das Interesse hoffentlich klarer oder kann als kleines Ratespiel angesehen werden.</p>
                    <img src={int} alt='Interessen Bild Zentrum' style={{ height: '35%', width: 'auto', transform: 'translate(-10%, 35%)', borderRadius: '10px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {interessenImages.map((image, index) => (
                        <div className='Interessen-image-container'>
                            <img src={image} alt={'Interessen Bild Nr. ' + index} />
                            <div className='Interessen-text'>
                                {interessenTexte[index]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}