import React from 'react'
import './Home.css'

// import Foto from '../../images/foto.jpeg'
import Foto2 from '../../images/foto2.jpeg'
import Linkedin from '../../images/linkedin.png'
import Github from '../../images/github.png'

 const Home = () => {

  return (
    <>
      <div className='div-home' id='home'>
        <div className='div-text-home'>
          <p>Olá, eu sou o</p>
          <h1>Murillo Santos</h1>
          {/* <p>Full Stack Developer</p> */}
          <p className='typing-text'>
          <span></span>
          </p>
  
          <div className='div-social-home'>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/murillo-henrique-santos/'>
              <img src={Linkedin} alt='logo do linkedin' className='social-media' id='linkedin' />
            </a>

            <a target='_blank' rel="noreferrer" href='https://github.com/murilloohs'>
              <img src={Github} alt='logo do github' className='social-media' id='github' />
            </a>

          </div>
        </div>

        <div className='div-image-home'>
          <img src={Foto2} alt='uma foto minha' className='foto'/>
        </div>
      </div>

      <div className="wrapper">
        <a href="#sobre"> 
          <div className="arrow">
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </a>
      </div>
    </>
  )
}

export default Home;