import { useRef } from 'react';
import './Projetos.css';

import Trivia from '../../trivia.mp4';
import TriviaMb from '../../images/trivia-mobile.png';
import Netflix from '../../images/netflix.jpg';
import NetflixMb from '../../images/netflix-mobile.png';

const Projetos = () => {
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoPause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className='div-projetos' id='projetos'>
      <h1>PROJETOS</h1>
      <div className='projects'>
        <div 
          className='div-fp-image'
          onMouseEnter={handleVideoPlay}
          onMouseLeave={handleVideoPause}
        >
          <a target='_blank' href='https://trivia-murilloohs.vercel.app/' rel="noreferrer">
            <video 
              ref={videoRef} 
              src={Trivia} 
              id='trivia-video' 
              muted
              playsInline
            />
            <img src={TriviaMb} alt='print de um website de trivia' className='image-mobile' />
          </a>
        </div>
        <div className='div-fp-text'>
          <h3>TRIVIA GAME</h3>
          <p>Trivia é um jogo de perguntas e respostas que utiliza uma API externa para fornecer as questões. Ao final é possível ver o ranking local para comparar as pontuações.</p>
          <div className='div-buttons'>
            <a href='https://trivia-murilloohs.vercel.app/' target='_blank' rel="noreferrer" className='button-project'>Site</a>
            <a href='https://github.com/murilloohs/trivia-game' target='_blank' rel="noreferrer" className='button-project'>Código</a>
          </div>
        </div>
      </div>

      <div className='projects'>
        <div className='div-fp-image'> 
          <a target='_blank' href='https://netflix-clone-murilloohs.vercel.app/' rel="noreferrer">
            <img src={Netflix} alt='print do site com a interface principal da Netflix' className='fp-image'/>
            <img src={NetflixMb} alt='print do site com a interface principal da Netflix' className='image-mobile'/>
          </a>
        </div>
        <div className='div-fp-text'>
          <h3>CLONE NETFLIX</h3>
          <p>Clone da interface principal da Netflix. A aplicação consome dados da API do The Movie Database (TMDb) para exibir listas de filmes e séries de forma dinâmica.</p>
          <div className='div-buttons'>
            <a href='https://netflix-clone-murilloohs.vercel.app/' target='_blank' rel="noreferrer" className='button-project'>Site</a>
            <a href='https://github.com/murilloohs/netflix' target='_blank' rel="noreferrer" className='button-project'>Código</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;