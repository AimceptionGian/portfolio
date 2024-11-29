import '../index.css';
import ex3 from '../images/referenceEx3-2.jpg';
import { useNavigate } from 'react-router-dom';

export default function Interessen() {

    const interessenImages = [
        ex3, ex3, ex3, ex3, ex3, ex3, ex3, ex3, ex3
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
                            <div className='Nav-button dark' onClick={() => handleNavButton("/")}>Gian Oechslin</div>
                        </li>
                        <li className='Nav-list'>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/Kontakt")}>Kontakt</div>
                        </li>
                        <li className='Nav-list'>
                            <div className='Nav-button dark' onClick={() => handleNavButton("/Referenzen")}>Referenzen</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='Title'>
                <h1>Interessen</h1>
            </div>
            <div>
                <div style={{ height: '50vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ zIndex: '1', width: '45%' }}>Hier könnte ein sinnvoller und guter Text stehen, aber stattdessen schreibe ich einen Text ohne Aussage um überhaupt mal einen Text stehen zu haben. Und jetzt füge ich den selben sinnlosen Text einfach nochmal ein. Hier könnte ein sinnvoller und guter Text stehen, aber stattdessen schreibe ich einen Text ohne Aussage um überhaupt mal einen Text stehen zu haben.</p>
                    <img src={ex3} style={{ height: '35%', width: 'auto', transform: 'translate(-10%, 35%)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {interessenImages.map((image) => (
                        <img src={image} style={{ width: '33.33%' }} />
                    ))}
                </div>
            </div>
            
        </div>
    )
}