import '../index.css';
import white from '../images/white.jpg';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    const handleNavButton = (newPage) => {
        navigate(newPage);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100vh', position: 'absolute', top: '40%', left: '35%', transform: 'translate(-50%, -50%)' }}>
                <h1 className='First-name'>Gian</h1>
                <h1 className='Name'>Oechslin</h1>
            </div>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <ul>
                        <li className='Nav-List'>
                            <div className='Nav-button' onClick={() => handleNavButton("/Referenzen")}><p>Referenzen</p><p>Referenzen</p><p>Referenzen</p></div>
                        </li>
                        <li className='Nav-List'>
                            <div className='Nav-button' onClick={() => handleNavButton("/Interessen")}><p>Interessen</p><p>Interessen</p><p>Interessen</p></div>
                        </li>
                    </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '17%', position: 'absolute', top: '70%', left: '17%', transform: 'translate(-50%, -50%)' }}>
                    <p>Interessiert an einer Zusammenarbeit oder haben Sie Fragen?</p>
                    <div className='Nav-button dark' onClick={() => handleNavButton("/Kontakt")}><p>Kontakt</p><p>Kontakt</p><p>Kontakt</p></div>
                </div>
            </div>
            <img src={white} alt='Hintergrundbild' style={{ width: '65%', objectFit: 'cover' }} />
        </div>
    )
}