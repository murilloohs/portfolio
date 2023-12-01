import React, { useRef } from 'react';
import './Contato.css';

import Top from '../../images/top.png';
import Email from '../../images/email.png';
import Linkedin from '../../images/linkedin.png';

const Contato = () => {
  const copyTextRef = useRef(null);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
      textArea.value = 'murillohsantos@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      const copyTextElement = copyTextRef.current;
      copyTextElement.innerHTML = "Copiado!";
  }

  const mouseOut = () => {
    const copyTextElement = copyTextRef.current;
    copyTextElement.innerHTML = "Copiar";
  }

  return (
    <div className='div-contato' id='contato'>
      <h1>CONTATO</h1>

      <div className='div-copy'>
        <button className='btn-copy' onClick={copyToClipboard} onMouseOut={mouseOut} >
          <span id='copy-text' ref={copyTextRef} >Copiar</span>
          <img src={Email} alt='imagem de uma carta' className='img-copy' />
          murillohsantos@gmail.com
          </button>
      </div>
      <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/murillo-henrique-santos/'>
        <img src={Linkedin} alt='logo do linkedin' className='logo-linkedin-cnt' />
      </a>


      <div className='div-backTop'>
        <img src={Top} alt='icone de uma seta apontando para cima para retornar ao topo da página' id='backTop' onClick={topFunction}/>
      </div>
    </div>
  )
}

export default Contato;