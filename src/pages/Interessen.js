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

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

const interessen = [
    { image: int1, label: 'Politik' },
    { image: int2, label: 'Kunst' },
    { image: int3, label: 'Technologie' },
    { image: int4, label: 'Musik' },
    { image: int5, label: 'Lyrik' },
    { image: int6, label: 'Philosophie' },
    { image: int7, label: 'Videobearbeitung' },
    { image: int8, label: 'Psychologie' },
    { image: int9, label: 'Gaming' },
];

export default function Interessen() {
    return (
        <>
            <Nav />
            <main className='page'>
                <section className='intro'>
                    <Reveal className='intro__text'>
                        <span className='eyebrow'>Was mich bewegt</span>
                        <h1 className='page-title'>Interessen</h1>
                        <p className='lead'>
                            Auf dieser Seite können Sie eine Galerie meiner Interessen sehen. Zugegeben war es sehr
                            schwierig, diese Galerie zusammenzustellen, da meine Interessen vielseitig und teilweise
                            nicht wirklich vernünftig in einem Foto zusammenzufassen sind. Beim Hovern über die Bilder
                            erscheint eine kurze Beschreibung. Somit wird das Interesse hoffentlich klarer oder kann als
                            kleines Ratespiel angesehen werden.
                        </p>
                    </Reveal>
                    <Reveal className='intro__media' delay={120}>
                        <img src={int} alt='Collage zu meinen Interessen' className='framed' />
                    </Reveal>
                </section>

                <section className='tiles' aria-label='Galerie der Interessen'>
                    {interessen.map((item, index) => (
                        <Reveal key={item.label} className='tile' delay={(index % 3) * 80} tabIndex={0}>
                            <img src={item.image} alt={item.label} loading='lazy' decoding='async' />
                            <div className='tile__overlay'>
                                <span className='tile__index'>{String(index + 1).padStart(2, '0')}</span>
                                <span className='tile__label'>{item.label}</span>
                            </div>
                        </Reveal>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
}
