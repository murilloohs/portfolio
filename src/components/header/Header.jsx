import './Header.css'
import logo2 from '../../images/logo2.svg'

export default function Header() {
  return (
    <header>
      <div className='div-header'>
        <div className='div-logo'>
          <img src={logo2} alt='logo' className='logo'/>
        </div>

        <ul className='list'>
          <li>
            <a href='#home'>Home</a>
          </li>

          <li>
            <a href='#sobre' className='redir' >Sobre</a>
          </li>

          <li>
            <a href='#projetos' className='redir' >Projetos</a>
          </li>

          <li>
            <a href='#contato' className='redir' >Contato</a>
          </li>

        </ul>

      </div>
    </header>
  )
}