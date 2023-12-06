import React, { useRef, useEffect} from 'react';
import './Projetos.css';

import CarrinhoCompras from '../../images/carrinho.png';

const Projetos = () => {
  const projectsRef = useRef([]);

  useEffect(() => {
    const projectsElement = projectsRef.current;

    const handleOver = (e) => {
      e.target.style.transform = 'translateY(-86%)';
      e.target.style.transition = 'transform 8s ease-in-out';
    };

    const handleOut = (e) => {
      e.target.style.transform = 'translateY(0%)';
      e.target.style.transition = 'transform 3s ease-in-out';
    };

    projectsElement.forEach(project => {
      project.addEventListener("mouseover", handleOver);
      project.addEventListener("mouseout", handleOut);
    });

    return () => {
      projectsElement.forEach(project => {
        project.removeEventListener("mouseover", handleOver);
        project.removeEventListener("mouseout", handleOut);
      });
    };
  });

  return (
    <div className='div-projetos' id='projetos'>
      <h1>PROJETOS</h1>
      <div className='projects'>
        <div ref={e => projectsRef.current[0] = e} className='div-fp-image'>
          <a target='_blank' href='https://google.com' rel="noreferrer">
            <img src={CarrinhoCompras} alt='print de um website exemplo de carrinho de compras' className='fp-image'/>
          </a>
        </div>
        <div className='div-fp-text'>
          <h3>CARRINHO DE COMPRAS</h3>
          <p>Um exemplo de site que utiliza a API do Mercado Livre para criar produtos e simular um carrinho de compras.</p>
          <div className='div-buttons'>
            <a href='https://google.com' target='_blank' rel="noreferrer" className='button-project'>Site</a>
            <a href='https://github.com/murilloohs/shopping-cart-website' target='_blank' rel="noreferrer" className='button-project'>Código</a>
          </div>
        </div>

      </div>
      <div className='projects'>
        <div ref={e => projectsRef.current[1] = e} className='div-fp-image'>
          <a target='_blank' href='https://google.com' rel="noreferrer">
            <img src={CarrinhoCompras} alt='print de um website exemplo' className='fp-image'/>
          </a>
        </div>
        <div className='div-fp-text'>
          <h3>TRIVIA GAME</h3>
          <p>Trivia é um jogo de perguntas e respostas que utiliza uma API externa para fornecer as questões</p>
          <div className='div-buttons'>
          <a href='https://google.com' target='_blank' rel="noreferrer" className='button-project'>Site</a>
            <a href='https://github.com/murilloohs/trivia-game' target='_blank' rel="noreferrer" className='button-project'>Código</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projetos;