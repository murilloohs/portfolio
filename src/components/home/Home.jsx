import './Home.css'

import Foto from '../../images/foto.jpeg'

export default function Home() {
  return (
    <div className='div-home' id='home'>
      <div className='div-text-home'>
        <h1>Full Stack Developer</h1>
        <p>Olá, eu sou o Murillo, tenho 21 anos, com 1 ano de experiência trabalhando como freelancer.</p>
        <div className='div-social-home'>

        </div>
      </div>

      <div className='div-border-image'>
        <div className='div-image-home'>
          <img src={Foto} alt='uma selfie minha' className='foto'/>
        </div>
      </div>

    </div>

  )
}