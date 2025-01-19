import '../index.css';

import reference1 from '../images/reference1.jpg';
import reference2 from '../images/reference2.jpg';
import reference3 from '../images/reference3.jpg';

import ex1 from '../images/reference/Ex1/referenceEx1.png';
import ex1_1 from '../images/reference/Ex1/referenceEx1_1.png';
import ex1_2 from '../images/reference/Ex1/referenceEx1_2.png';
import ex1_3 from '../images/reference/Ex1/referenceEx1_3.png';
import ex1_4 from '../images/reference/Ex1/referenceEx1_4.png';

import ex2 from '../images/reference/Ex2/referenceEx2.png';
import ex2_1 from '../images/reference/Ex2/referenceEx2_1.png';
import ex2_2 from '../images/reference/Ex2/referenceEx2_2.png';
import ex2_3 from '../images/reference/Ex2/referenceEx2_3.png';

import ex3 from '../images/reference/Ex3/referenceEx3.jpg';
import ex3_1 from '../images/reference/Ex3/referenceEx3_1.jpg';

import ex4 from '../images/reference/Ex4/referenceEx4.jpg';

import ex5 from '../images/reference/Ex5/referenceEx5.jpg';
import ex5_1 from '../images/reference/Ex5/referenceEx5_1.jpg';
import ex5_2 from '../images/reference/Ex5/referenceEx5_2.jpg';
import ex5_3 from '../images/reference/Ex5/referenceEx5_3.jpg';

import ex6 from '../images/reference/Ex6/referenceEx6.jpg';

import ex7 from '../images/reference/Ex7/referenceEx7.jpg';
import ex7_1 from '../images/reference/Ex7/referenceEx7_1.jpg';
import ex7_2 from '../images/reference/Ex7/referenceEx7_2.jpg';
import ex7_3 from '../images/reference/Ex7/referenceEx7_3.jpg';

import { useNavigate } from 'react-router-dom';

export default function Referenzen() {

    const referenzImages = [
        ex1, ex2, ex3, ex4, ex5, ex6, ex7,
    ];

    const additionalImages = [
        [ex1_1, ex1_4, ex1_3, ex1_2],
        [ex2, ex2_1, ex2_2, ex2_3],
        [ex3_1],
        [ex4],
        [ex5, ex5_1, ex5_2, ex5_3],
        [ex6],
        [ex7, ex7_1, ex7_2, ex7_3],
    ];

    const referenzTexte = [
        <p className='Referenzen-text'>Hier habe ich das Kultspiel Minesweeper mit JavaFX nachprogrammiert. Die Grafiken habe ich digital selbst gezeichnet. Ziel des Spiel ist es alle Felder aufzudecken ohne dabei auf eine Bombe zu klicken. Die Felder zeigen an wieviele Bomben angrenzen.</p>,
        <p className='Referenzen-text'>Im Rahmen eines Schulprojekts habe ich einen Versicherungsrechner gestaltet. Als Versicherungsart habe ich mich für eine Cyberversicherung entschieden. Die Seite ist modern und übersichtlich gehalten und sollte somit für junge Leute zugänglicher sein.</p>,
        <p className='Referenzen-text'>Diese Unterwasserlandschaft habe ich in Zusammenarbeit mit einigen talentierten Leuten gemalt. Dazu beigetragen habe ich den Kampffisch. Zuerst habe ich ihn auf einem Papier gemalt, um die Technik rauszubekommen und die Platzierung auf dem finalen Gemälde besser wählen zu können.</p>,
        <p className='Referenzen-text'>Hier habe ich Grusskarten mit Wasserfarbe ausgeschnitten und gestaltet. Zuerst habe ich die Feder mit Bleistift vorgezeichnet und dann darüber den Farbverlauf gemacht. Zum Schluss habe ich mit einem Wasserfesten Stift die Muster in die Feder gezeichnet.</p>,
        <p className='Referenzen-text'>Diese Specksteinskulptur sollte eine Katze darstellen. In vielen mühsahmen Schritten habe ich einen Block aus Speckstein immer weiter abgefeilt um die grobe Form der Katze zu sehen. Anschliessend habe ich mit feineren Werkzeugen und Schleiffpapier die Details aus dem Stein gebracht. Am Ende habe ich die Skulptur mit Nassschleiffpapier und Öl poliert.</p>,
        <p className='Referenzen-text'>Diesen Stein habe ich mit einer sogenannten Dot-Painting-Technik bemalt. Das Sujet habe ich zuerst mit Bleistift vorgezeichnet, um es dann anschliessend mit Acrylfarbe zu übertupfen.</p>,
        <p className='Referenzen-text'>Hier sehen Sie zwei Acrylbilder. Zur besseren Veranschauung habe ich die Bilder auf einer Webseite in einem Raum aufhängen lassen. Da die Webseite viele Einschränkungen hat, konnte ich das erste Bild nicht schräg aufhängen, wie es eigentlich angedacht ist.</p>,
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
                                    {additionalImages[index] && additionalImages[index].filter(Boolean).length === 1 ? (
                                        <img
                                            src={additionalImages[index][0]}
                                            className="Referenzen-hover-image full-size"
                                            alt="Einzelnes Bild"
                                        />
                                    ) : (
                                        [...Array(4)].map((_, hoverIndex) => (
                                            additionalImages[index] && additionalImages[index][hoverIndex] ? (
                                                <img
                                                    key={hoverIndex}
                                                    src={additionalImages[index][hoverIndex]}
                                                    className="Referenzen-hover-image"
                                                    alt={`Zusätzliches Bild ${hoverIndex + 1}`}
                                                />
                                            ) : null
                                        ))
                                    )}
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
