import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Sobre from './components/sobre/Sobre';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Sobre />
      </main>
    </>
  );
}

export default App;
