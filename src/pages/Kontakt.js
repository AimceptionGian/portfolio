import '../index.css';
import mail from '../images/mail.svg';
import me from '../images/DSC08448.png';
import { useNavigate } from 'react-router-dom';

export default function Kontakt() {

    const navigate = useNavigate();

    const handleNavButton = (newPage) => {
        navigate(newPage);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', width: '100%' }}>
            <div id='Kontakt-nav' style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <ul>
                        <li className='Nav-list' style={{ position: "absolute", left: "0" }}>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/")}>Gian Oechslin</div>
                        </li>
                        <li className='Nav-list'>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/Referenzen")}>Referenzen</div>
                        </li>
                        <li className='Nav-list'>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/Interessen")}>Interessen</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='Title'>
                <h1 style={{ transform: 'translate(-10%,-125%)' }}>Kontakt</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignSelf: 'flex-end', width: '30%', marginLeft: '5%', marginRight: '5%', marginBottom: '10%' }}>
                    <a style={{ zIndex: '5', textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} href='mailto:gianflurin@icloud.com'>
                        <img src={mail} style={{ width: '15%', marginRight: '2.5%' }} />
                        <h2>gianflurin@icloud.com</h2>
                    </a>
                    <p style={{ padding: '10%', paddingTop: '5%' }}>Hier könnte Ihre Werbung stehen, oder auch nicht. Ich muss mir irgendeinen Text ausdenken, um diese Lücke zu füllen. Lorem ipsum dolor sit amet. Das ist Latein und bedeutet Platzhalter Platzhalter.</p>
                </div>
                <img src={me} style={{ width: 'auto', height: '35%' }} />
                <div>
                    <p style={{ width: '50%', margin: '5%' }}>Noch so ein komischer Text. Was ist denn das? Nur komische Texte.</p>
                </div>
            </div>
        </div>
    )
}