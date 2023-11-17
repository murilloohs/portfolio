import './Stacks.css'

import Html from '../../images/html.png';
import Css from '../../images/css.png';
import Javascript from '../../images/javascript.png';
import React from '../../images/react.png';
import Java from '../../images/java.png';
import Mysql from '../../images/mysql.png';

export default function Stacks() {
  return (

    <div className='div-stacks' >
      <div className='wrapper-stacks' >
        <i className='fa-solid fa-angle-left'></i>
        <div className='carousel'>
          <img src={Html} alt='logo HTML' />
          <img src={Css} alt='logo CSS' />
          <img src={Javascript} alt='logo JavaScript' />
          <img src={React} alt='logo React' />
          <img src={Java} alt='logo java' />
          <img src={Mysql} alt='logo MySQL' />
        </div>
        <i className='fa-solid fa-angle-right'></i>
      </div>
    </div>

  )
}