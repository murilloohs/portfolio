import './Sobre.css'

import Foto from '../../images/foto.jpeg'

export default function Sobre() {
  return (
    <div className='div-sobre' id='sobre'>
      <div className='div-image-sobre'>
        <img src={Foto} alt='uma selfie minha' />
      </div>

      <div className='div-text-sobre'>
        <h1>SOBRE MIM</h1>
        <p>Olá, eu sou o Murillo, tenho 21 anos, com 1 ano de experiência trabalhando como freelancer.</p>
      </div>

    </div>

  )
}