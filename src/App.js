
import './App.css';

import Formacao from './components/Formacao';
import Habilidades from './components/Habilidades';
import Header from './components/Header';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sobre/>
      <Formacao/>
      <Habilidades/>
      <Projetos/>
    </div>

  );
}

export default App;
