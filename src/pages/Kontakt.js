import mail from '../images/mail.svg';
import me from '../images/DSC08448-2.png';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function Kontakt() {
    return (
        <>
            <Nav />
            <main className='page contact'>
                <Reveal className='contact__photo'>
                    <img src={me} alt='Gian Oechslin' className='framed' />
                </Reveal>

                <Reveal className='contact__text' delay={120}>
                    <span className='eyebrow'>Schreib mir</span>
                    <h1 className='page-title'>Kontakt</h1>
                    <p className='lead'>
                        Schreiben Sie mir gerne an diese E-Mail-Adresse, wenn Sie Fragen zu der Seite oder Interesse
                        an einer Zusammenarbeit haben. Ich freue mich auf Ihre Nachricht!
                    </p>

                    <a className='mail-card' href='mailto:gianflurin@icloud.com'>
                        <img src={mail} alt='' className='mail-card__icon' />
                        <span className='mail-card__address'>gianflurin@icloud.com</span>
                        <span className='mail-card__arrow' aria-hidden='true'>→</span>
                    </a>

                    <p className='contact__note'>
                        Zurzeit besuche ich die IMS in Winterthur und werde mein Praktikum im Sommer starten.
                    </p>
                </Reveal>
            </main>
            <Footer />
        </>
    );
}
