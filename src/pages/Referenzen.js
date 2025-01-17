import '../index.css';
import reference1 from '../images/reference1.jpg';
import reference2 from '../images/reference2.jpg';
import reference3 from '../images/reference3.jpg';

import ex1 from '../images/referenceEx1/referenceEx1.png';
import ex1_1 from '../images/referenceEx1/referenceEx1_1.png';
import ex1_2 from '../images/referenceEx1/referenceEx1_2.png';
import ex1_3 from '../images/referenceEx1/referenceEx1_3.png';
import ex1_4 from '../images/referenceEx1/referenceEx1_4.png';

import ex2 from '../images/referenceEx2/referenceEx2.png';
import ex2_1 from '../images/referenceEx2/referenceEx2_1.png';
import ex2_2 from '../images/referenceEx2/referenceEx2_2.png';
import ex2_3 from '../images/referenceEx2/referenceEx2_3.png';

import { useNavigate } from 'react-router-dom';

export default function Referenzen() {

    const referenzImages = [
        ex1, ex2
    ];

    const additionalImages = [
        [ex1_1, ex1_4, ex1_3, ex1_2],
        [ex2, ex2_1, ex2_2, ex2_3],
    ];

    const referenzTexte = [
        <p className='Referenzen-text'>Hier habe ich das Kultspiel Minesweeper mit JavaFX nachprogrammiert. Die Grafiken habe ich digital selbst gezeichnet. Ziel des Spiel ist es alle Felder aufzudecken ohne dabei auf eine Bombe zu klicken. Die Felder zeigen an wieviele Bomben angrenzen.</p>,
        <p className='Referenzen-text'>Im Rahmen eines Schulprojekts habe ich einen Versicherungsrechner gestaltet. Als Versicherungsart habe ich mich für eine Cyberversicherung entschieden. Die Seite ist modern und übersichtlich gehalten und sollte somit für junge Leute zugänglicher sein.</p>,
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
                            <div className='Nav-button dark' onClick={() => handleNavButton("/")}><p>Gian Oechslin</p><p>Gian Oechslin</p><p>Gian Oechslin</p></div>
                        </li>
                        <li className='Nav-list'>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/Kontakt")}><p>Kontakt</p><p>Kontakt</p><p>Kontakt</p></div>
                        </li>
                        <li className='Nav-list'>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/Interessen")}><p>Interessen</p><p>Interessen</p><p>Interessen</p></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='Title'>
                <h1>Referenzen</h1>
            </div>
            <div id='Referenzen-center' style={{ zIndex: '0', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div style={{ zIndex: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <img src={reference1} alt='Referenz Kategorie Nr. 1' className='Referenzen-images' />
                    <img src={reference3} alt='Referenz Kategorie Nr. 2' className='Referenzen-images' />
                </div>
                <div style={{ zIndex: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '25%', alignSelf: 'end', transform: 'translate(0%, 20%)' }}>
                        <p style={{ width: '125%', transform: 'translate(-33%)' }}>Hier sehen Sie eine Menge an spannenden Projekten, welche ich schon umgesetzt habe. Nebst Informatik-Projekten finden Sie auch Videoschnitt-Projekte, Malereien und andere Kreativarbeiten</p>
                    </div>
                    <img src={reference2} alt='Referenz Kategorie Nr. 3' className='Referenzen-images' style={{ marginLeft: 'auto' }} />
                    <div style={{ width: '25%', transform: 'translate(0%, -5%)' }}>
                        <p className='Referenzen-category' style={{ marginLeft: '-25%' }}>Java</p>
                        <p className='Referenzen-category' style={{ marginLeft: '0%' }}>JavaScript</p>
                        <p className='Referenzen-category' style={{ marginLeft: '25%' }}>PremierePro</p>
                        <p className='Referenzen-category' style={{ marginLeft: '50%' }}>und mehr</p>
                    </div>
                </div>
            </div>
            <div style={{ height: '100vh' }} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div id="Referenzen" className="Referenzen-list">
                    {referenzTexte.map((referenzText, index) => (
                        <div id={`Referenzen-example${index}`} className={`Referenzen-pair${index % 2 === 0 ? '-even' : '-odd'}`}>
                            <div className="Referenzen-image-container">
                                <img src={referenzImages[index]} alt={'Referenzen Bild Nr. ' + index} style={{ width: '100%' }} />
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
