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
            <div style={{ display: 'flex', flexDirection: 'column', width: '40%', position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}>
                <h1 className='First-name'>Gian</h1>
                <h1 className='Name'>Oechslin</h1>
            </div>
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <ul>
                        <li className='Nav-List'>
                            <div className='Nav-button' onClick={() => handleNavButton("/Referenzen")}>Referenzen</div>
                        </li>
                        <li className='Nav-List'>
                            <div className='Nav-button' onClick={() => handleNavButton("/Interessen")}>Interessen</div>
                        </li>
                    </ul>
                </div>
            </div>
            <img src={white} style={{ width: '75%', objectFit: 'cover' }} />
        </div>
    )
}