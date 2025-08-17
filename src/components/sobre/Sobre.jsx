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
        
        <p>Sou um Desenvolvedor Full Stack, focado em traduzir desafios de negócio em soluções técnicas robustas, escaláveis e de fácil manutenção.<span id='mobile-off'> Minha paixão é projetar e construir sistemas que não apenas funcionam, mas que são bem estruturados e preparados para o futuro.</span></p>

        <p>Minha experiência abrange a arquitetura de soluções back-end com Python, Django e PHP para o desenvolvimento de APIs REST e a modernização de sistemas legados, utilizando bancos de dados como MySQL. No front-end, utilizo JavaScript e React para criar interfaces de usuário intuitivas e eficientes.</p>

        <p>Na minha atuação profissional, foco em resolver problemas de engenharia complexos, como o desenvolvimento de integrações resilientes com funcionalidade offline-first e a construção de novos sistemas de gestão (ERP). </p>
      </div>

    </div>

  )
}