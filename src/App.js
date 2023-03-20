import './App.css';
import logo from './img/logo.svg'

function App() {
  return (
    <div className='app'>
      <header className='cabecalho'>
        <div className='campo-logo'>
          <img src={logo} alt='logo'></img>
          <p><strong>Alura</strong>Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
