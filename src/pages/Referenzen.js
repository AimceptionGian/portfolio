import '../index.css';
import reference1 from '../images/reference1.jpg';
import reference2 from '../images/reference2.jpg';
import reference3 from '../images/reference3.jpg';
import { useNavigate } from 'react-router-dom';

export default function Referenzen() {

    const navigate = useNavigate();

    const handleNavButton = (newPage) => {
        navigate(newPage);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100vh', zIndex: '2', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <h1>Referenzen</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '50vh', height: '100vh', zIndex: '1', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <img src={reference1} style={{ transform: 'translate(-50%, 39%)' }}/>
                <img src={reference3} style={{ transform: 'translate(50%, -57%)' }} />
                <img src={reference2} style={{ transform: 'translate(0%, -57%)' }} />
            </div>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
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
        </div>
    )
}