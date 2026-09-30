import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
        <h1>Bienvenue sur votre page d'inscription</h1>
        <input type='text' id='loginText' placeholder='Login'></input>
        <input type='text' id='password' placeholder='Password'></input>
        <button>Connexion</button>
        <button>Inscription</button>
      </div>
    </div>
  );
}

export default App;
