import './App.css';
import milkyway from './images/milkyway.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh' }}>
          <h1>Gian Oechslin</h1>
          <img src={milkyway} style={{ width: '75%', objectFit: 'cover' }} />
        </div>
      </header>
    </div>
  );
}

export default App;
