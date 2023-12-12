import './Sobre.css'

import Foto3 from '../../images/foto3.jpeg'

export default function Sobre() {
  return (
    <div className='div-sobre' id='sobre'>
      <div className='div-image-sobre'>
        <img src={Foto3} alt='uma foto minha' />
      </div>

      <div className='div-text-sobre'>
        <h1>SOBRE MIM</h1>
        <p>Sou um desenvolvedor full stack com 21 anos de idade e um ano de experiência construindo soluções digitais como freelancer. Desde que entrei no mundo da tecnologia, descobri um universo fascinante e desafiador que me permitiu mergulhar de cabeça na criação de aplicativos web dinâmicos e inovadores.</p>
        <p>Possuo conhecimento desde linguagens front-end como HTML, CSS e JavaScript, até frameworks back-end como Node.js e Express. Durante meu tempo como freelancer, tive o privilégio de colaborar em diversos projetos que expandiram meu conjunto de habilidades e conhecimentos.</p>
      </div>

    </div>

  )
}