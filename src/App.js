import './App.css';
import white from './images/white.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '40%', position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }}>
            <h1 className='First-name'>Gian</h1>
            <h1 className='Name'>Oechslin</h1>
          </div>
          <div style={{position: 'absolute', width: '100%', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
              <ul>
                <li>
                  <div className='Nav-button'>Referenzen</div>
                </li>
                <li>
                  <div className='Nav-button'>Interessen</div>
                </li>
              </ul>
            </div>
          </div>
          <img src={white} style={{ width: '75%', objectFit: 'cover' }} />
        </div>
      </header>
    </div>
  );
}

export default App;
