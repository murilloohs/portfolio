import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Sobre from './components/sobre/Sobre';
import Stacks from './components/stacks/Stacks';
import Projetos from './components/projetos/Projetos';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Sobre />
        <Stacks />
        <Projetos />
      </main>
    </>
  );
}

export default App;
