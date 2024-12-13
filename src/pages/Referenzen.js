import '../index.css';
import reference1 from '../images/reference1.jpg';
import reference2 from '../images/reference2.jpg';
import reference3 from '../images/reference3.jpg';
import ex1 from '../images/referenceEx1.jpg';
import ex2 from '../images/referenceEx2.jpg';
import ex3 from '../images/referenceEx3-2.jpg';
import { useNavigate } from 'react-router-dom';

export default function Referenzen() {

    const referenzImages = [
        ex1, ex2, ex3
    ];

    const additionalImages = [
        [ex3, ex2, ex1, ex2],
        [ex3, ex3, ex3, ex3],
        [ex3, ex3, ex3, ex3],
    ];

    const referenzTexte = [
        <p className='Referenzen-text'>Das wäre eine Beschreibung zu dem Bild auf der linken Seite.</p>,
        <p className='Referenzen-text'>Hier würde ein sinnvoller Text stehen.</p>,
        <p className='Referenzen-text'>Wow das ist ein weiterer platzhalter Text.</p>
    ];

    const navigate = useNavigate();

    const handleNavButton = (newPage) => {
        navigate(newPage);
    }

    return (
        <div>
            <div id='Referenzen-nav' style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <ul>
                        <li className='Nav-list' style={{ position: "absolute", left: "0" }}>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/")}>Gian Oechslin</div>
                        </li>
                        <li className='Nav-list'>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/Kontakt")}>Kontakt</div>
                        </li>
                        <li className='Nav-list'>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/Interessen")}>Interessen</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='Title'>
                <h1>Referenzen</h1>
            </div>
            <div id='Referenzen-center' style={{ zIndex: '0', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div style={{ zIndex: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <img src={reference1} className='Referenzen-images' />
                    <img src={reference3} className='Referenzen-images' />
                </div>
                <div style={{ zIndex: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '25%', alignSelf: 'end', transform: 'translate(0%, 5%)' }}>
                        <p style={{ width: '125%', transform: 'translate(-33%)' }}>Hier sehen Sie eine Menge an spannenden Projekten, welche ich schon gemacht habe. Nebst Informatik-Projekten finden Sie auch eine Hand von Videoschnitt-Projekten.</p>
                    </div>
                    <img src={reference2} className='Referenzen-images' style={{ marginLeft: 'auto' }} />
                    <div style={{ width: '25%', transform: 'translate(0%, -5%)' }}>
                        <p className='Referenzen-category' style={{ marginLeft: '-25%' }}>Java</p>
                        <p className='Referenzen-category' style={{ marginLeft: '0%' }}>JavaScript</p>
                        <p className='Referenzen-category' style={{ marginLeft: '25%' }}>PremierePro</p>
                        <p className='Referenzen-category' style={{ marginLeft: '50%' }}>AfterEffects</p>
                    </div>
                </div>
            </div>
            <div style={{ height: '100vh' }} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div id="Referenzen" className="Referenzen-list">
                    {referenzTexte.map((referenzText, index) => (
                        <div id={`Referenzen-example${index}`} className={`Referenzen-pair${index % 2 === 0 ? '-even' : '-odd'}`}>
                            <div className="Referenzen-image-container">
                                <img src={referenzImages[index]} style={{ width: '100%' }} />
                                <div className="Referenzen-hover-images">
                                    {[...Array(4)].map((_, hoverIndex) => (
                                        <img key={hoverIndex} src={additionalImages[index][hoverIndex]} className="Referenzen-hover-image" alt={`Zusätzliches Bild ${hoverIndex + 1}`} />
                                    ))}
                                </div>
                            </div>
                            {referenzText}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
