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
            <div style={{ zIndex: '0', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div style={{ zIndex: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <img src={reference1} className='Referenzen-images' />
                    <img src={reference3} className='Referenzen-images' />
                </div>
                <div style={{ zIndex: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={reference2} className='Referenzen-images' style={{ marginLeft: 'auto' }} />
                    <div style={{ width: '25%' }}>
                        <p style={{ width: '150%', marginLeft: '0%' }}>Hier sehen Sie eine Menge</p>
                        <p style={{ width: '150%', marginLeft: '5%' }}>an spannenden Projekten, welche</p>
                        <p style={{ width: '150%', marginLeft: '10%' }}>ich schon gemacht habe.</p>
                    </div>
                    
                </div>
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
