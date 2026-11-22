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

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const kategorien = ['Java', 'JavaScript', 'PremierePro', 'und mehr'];

const projekte = [
    {
        title: 'Minesweeper',
        tag: 'Java · JavaFX',
        image: ex1,
        gallery: [ex1_1, ex1_4, ex1_3, ex1_2],
        text: 'Hier habe ich das Kultspiel Minesweeper mit JavaFX nachprogrammiert. Die Grafiken habe ich digital selbst gezeichnet. Ziel des Spiels ist es, alle Felder aufzudecken, ohne dabei auf eine Bombe zu klicken. Die Felder zeigen an, wie viele Bomben angrenzen.',
    },
    {
        title: 'Versicherungsrechner',
        tag: 'Web · Schulprojekt',
        image: ex2,
        gallery: [ex2, ex2_1, ex2_2, ex2_3],
        text: 'Im Rahmen eines Schulprojekts habe ich einen Versicherungsrechner gestaltet. Als Versicherungsart habe ich mich für eine Cyberversicherung entschieden. Die Seite ist modern und übersichtlich gehalten und sollte somit für junge Leute zugänglicher sein.',
    },
    {
        title: 'Unterwasserlandschaft',
        tag: 'Malerei · Gemeinschaftswerk',
        image: ex3,
        gallery: [ex3_1],
        text: 'Diese Unterwasserlandschaft habe ich in Zusammenarbeit mit einigen talentierten Leuten gemalt. Dazu beigetragen habe ich den Kampffisch. Zuerst habe ich ihn auf einem Papier gemalt, um die Technik rauszubekommen und die Platzierung auf dem finalen Gemälde besser wählen zu können.',
    },
    {
        title: 'Grusskarten',
        tag: 'Wasserfarbe',
        image: ex4,
        gallery: [ex4],
        text: 'Hier habe ich Grusskarten mit Wasserfarbe ausgeschnitten und gestaltet. Zuerst habe ich die Feder mit Bleistift vorgezeichnet und dann darüber den Farbverlauf gemacht. Zum Schluss habe ich mit einem wasserfesten Stift die Muster in die Feder gezeichnet.',
    },
    {
        title: 'Specksteinkatze',
        tag: 'Skulptur',
        image: ex5,
        gallery: [ex5, ex5_1, ex5_2, ex5_3],
        text: 'Diese Specksteinskulptur sollte eine Katze darstellen. In vielen mühsamen Schritten habe ich einen Block aus Speckstein immer weiter abgefeilt, um die grobe Form der Katze zu sehen. Anschliessend habe ich mit feineren Werkzeugen und Schleifpapier die Details aus dem Stein gebracht. Am Ende habe ich die Skulptur mit Nassschleifpapier und Öl poliert.',
    },
    {
        title: 'Dot-Painting',
        tag: 'Acryl auf Stein',
        image: ex6,
        gallery: [ex6],
        text: 'Diesen Stein habe ich mit einer sogenannten Dot-Painting-Technik bemalt. Das Sujet habe ich zuerst mit Bleistift vorgezeichnet, um es dann anschliessend mit Acrylfarbe zu übertupfen.',
    },
    {
        title: 'Acrylbilder',
        tag: 'Acryl auf Leinwand',
        image: ex7,
        gallery: [ex7, ex7_1, ex7_2, ex7_3],
        text: 'Hier sehen Sie zwei Acrylbilder. Zur besseren Veranschaulichung habe ich die Bilder auf einer Webseite in einem Raum aufhängen lassen. Da die Webseite viele Einschränkungen hat, konnte ich das erste Bild nicht schräg aufhängen, wie es eigentlich angedacht ist.',
    },
];

function Projekt({ projekt, index }) {
    const single = projekt.gallery.length === 1;
    return (
        <Reveal as='article' className={`project ${index % 2 === 1 ? 'project--reverse' : ''}`}>
            <div className='project__media' tabIndex={0} aria-label={`${projekt.title}: weitere Bilder anzeigen`}>
                <img src={projekt.image} alt={projekt.title} loading='lazy' decoding='async' />
                <div className={`project__gallery ${single ? 'project__gallery--single' : ''}`}>
                    {projekt.gallery.map((src, i) => (
                        <img key={i} src={src} alt={`${projekt.title}, Bild ${i + 1}`} loading='lazy' decoding='async' />
                    ))}
                </div>
                <span className='project__hint'>{single ? 'Detail' : `+${projekt.gallery.length} Bilder`}</span>
            </div>
            <div className='project__body'>
                <span className='project__index'>{String(index + 1).padStart(2, '0')}</span>
                <h2 className='project__title'>{projekt.title}</h2>
                <span className='chip'>{projekt.tag}</span>
                <p>{projekt.text}</p>
            </div>
        </Reveal>
    );
}

export default function Referenzen() {
    return (
        <>
            <Nav />
            <main className='page'>
                <section className='intro intro--refs'>
                    <Reveal className='intro__text'>
                        <span className='eyebrow'>Projekte</span>
                        <h1 className='page-title'>Referenzen</h1>
                        <p className='lead'>
                            Hier sehen Sie eine Menge an spannenden Projekten, welche ich schon umgesetzt habe. Nebst
                            Informatik-Projekten finden Sie auch Videoschnitt-Projekte, Malereien und andere
                            Kreativarbeiten.
                        </p>
                        <ul className='chips'>
                            {kategorien.map((k) => (
                                <li key={k} className='chip'>{k}</li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal className='collage' delay={120}>
                        <img src={reference1} alt='Referenz-Kategorie 1' className='collage__a' />
                        <img src={reference3} alt='Referenz-Kategorie 2' className='collage__b' />
                        <img src={reference2} alt='Referenz-Kategorie 3' className='collage__c' />
                    </Reveal>
                </section>

                <section className='projects' aria-label='Projekte'>
                    {projekte.map((projekt, index) => (
                        <Projekt key={projekt.title} projekt={projekt} index={index} />
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
}
