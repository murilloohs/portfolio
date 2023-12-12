import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Sobre from './components/sobre/Sobre';
import Stacks from './components/stacks/Stacks';
import Projetos from './components/projetos/Projetos';
import Contato from './components/contato/Contato';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Sobre />
        <Stacks />
        <Projetos />
        <Contato />
      </main>
    </>
  );
}

export default App;
