import React, { useState, useEffect } from 'react';
import './Header.css'
import logo2 from '../../images/logo2.svg'

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [hideSideBar, setHideSideBar] = useState(false);
  const [wrapper, setWrapper] = useState(false);
  
  const toggleSidebar = () => {
    setHideSideBar(showSideBar)
    setShowSideBar(!showSideBar);
  }

  useEffect(() => {
    if (showSideBar === true) {
      setWrapper(true);
    } else if (showSideBar === false) {
      setTimeout(() => {
        setWrapper(false);
      }, 600);
    }
  }, [showSideBar]);

  return (
    <header>
      <div className='div-header'>
        <div className='div-logo'>
          <img src={logo2} alt='logo' className='logo'/>
        </div>

        <button onClick={toggleSidebar} className="btn-icon-header" id='open-btn' >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>

        <div className='sidebar-wrapper' style={{ right: wrapper ? '0' : '-100%' }}>
          <nav className={`nav-header ${showSideBar ? 'show' : ''} ${hideSideBar ? 'hide' : ''}`} >
            <button className="btn-icon-header" onClick={ toggleSidebar } id='close-btn' >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
            <ul className='list'>
              <li>
                <a href='#home' onClick={ toggleSidebar }>Home</a>
              </li>
      
              <li>
                <a href='#sobre' className='redir' onClick={ toggleSidebar }>Sobre</a>
              </li>
      
              <li>
                <a href='#projetos' className='redir' onClick={ toggleSidebar }>Projetos</a>
              </li>

              <li>
                <a href='#contato' className='redir' onClick={ toggleSidebar }>Contato</a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default Header;