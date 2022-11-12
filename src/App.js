import './App.css';
import logoPrincipal from './img/logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const click = () =>{
    setNumClicks(numClicks + 1);
  }

  const reiniciar = () =>{
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='contenedor-logo'>
        <img className='logo' src={ logoPrincipal } alt='Logo principal' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={ numClicks } />
        <Boton texto='Click' click={ true } manejarClick={ click } />
        <Boton texto='Reiniciar' click={ false } manejarClick={ reiniciar } />
      </div>
    </div>
  );
}

export default App;
