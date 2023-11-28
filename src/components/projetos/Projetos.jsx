import React, { useRef, useEffect} from 'react';
import './Projetos.css'

import CarrinhoCompras from '../../images/carrinho-compras.png'

const Projetos = () => {
  const projectsRef = useRef([]);

  useEffect(() => {
    const projectsElement = projectsRef.current;

    const handleOver = (e) => {
      e.target.style.transform = 'translateY(-86%)';
      e.target.style.transition = 'transform 8s ease-in-out';
    };

    const handleOut = (e) => {
      console.log(e.target);
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
    <div className='div-projetos'>
      <h1>PROJETOS</h1>
      <div className='first-project'>
        <div ref={e => projectsRef.current[0] = e} className='div-fp-image'>
          <a target='_blank' href='https://google.com' rel="noreferrer">
            <img src={CarrinhoCompras} alt='print de um website exemplo de carrinho de compras' className='fp-image'/>
          </a>
        </div>
        <div className='div-fp-text'>
          <h3>CARRINHO DE COMPRAS</h3>
          <p>TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO</p>
        </div>

      </div>
      <div className='first-project'>
        <div ref={e => projectsRef.current[1] = e} className='div-fp-image'>
          <a target='_blank' href='https://google.com' rel="noreferrer">
            <img src={CarrinhoCompras} alt='print de um website exemplo' className='fp-image'/>
          </a>
        </div>
        <div className='div-fp-text'>
          <h3>SEGUNDO PROJETO</h3>
          <p>TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO</p>
        </div>
      </div>

    </div>
  )
}

export default Projetos;