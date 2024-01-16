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
        <p>Sou um desenvolvedor front-end com 21 anos de idade e um ano de experiência como freelancer. <span id='mobile-off'>Desde que entrei no mundo da tecnologia, descobri um universo fascinante e desafiador que me permitiu mergulhar de cabeça na criação de aplicativos web dinâmicos e inovadores.</span></p>
        <p>Possuo conhecimento em linguagens front-end como HTML, CSS e JavaScript, além de estar familiarizado com bibliotecas e ferramentas essenciais como Jest e React Testing Library para testes automatizados e garantia de qualidade em meus projetos. Além disso, também tenho experiência no uso do MySQL.</p>
        <p>Durante meu tempo como freelancer, tive o privilégio de colaborar em diversos projetos que expandiram meu conjunto de habilidades e conhecimentos.</p>
      </div>

    </div>

  )
}