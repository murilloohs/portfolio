import React, { useRef, useEffect} from 'react';
import './Stacks.css'

import Html from '../../images/html.png';
import Css from '../../images/css.png';
import Javascript from '../../images/javascript.png';
import ReactLogo from '../../images/react.png';
import Java from '../../images/java.png';
import Mysql from '../../images/mysql.png';

const Stacks = () => {
  const carouselRef = useRef(null);
  const arrowIconsRef = useRef([]);
  const firstImage = useRef(null);

  const showHideIcons = () => {
    let scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

    arrowIconsRef.current[0].style.display = carouselRef.current.scrollLeft === 0 ? "none" : "block";
    arrowIconsRef.current[1].style.display = carouselRef.current.scrollLeft === scrollWidth ? "none" : "block";
  }

  useEffect(() => {
    const arrowIconsElement = arrowIconsRef.current;
    let firstImgWidth = firstImage.current.clientWidth + 80;

    const handleClick = (e) => {
      carouselRef.current.scrollLeft += e.target.id === 'left' ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(), 60);
    };

    arrowIconsElement.forEach(icon => {
      icon.addEventListener("click", handleClick);
    });

    return () => {
      arrowIconsElement.forEach(icon => {
        icon.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className='div-stacks' >
      <div className='wrapper-stacks' >
        <i ref={e => arrowIconsRef.current[0] = e} className='fa-solid fa-angle-left' id='left'></i>
  
        <div ref={carouselRef} className='carousel'>
          <figure>
            <img src={Html} alt='logo HTML' ref={firstImage} />
            <figcaption className='descricao'>HTML</figcaption>
          </figure>
          <figure>
            <img src={Css} alt='logo CSS' />
            <figcaption className='descricao'>CSS</figcaption>
          </figure>

          <figure>
            <img src={Javascript} alt='logo JavaScript' />
            <figcaption className='descricao'>JavaScript</figcaption>
          </figure>

          <figure>
            <img src={ReactLogo} alt='logo React' />
            <figcaption className='descricao'>React</figcaption>
          </figure>

          <figure>
            <img src={Java} alt='logo java' />
            <figcaption className='descricao'>Java</figcaption>
          </figure>

          <figure>
            <img src={Mysql} alt='logo MySQL' />
            <figcaption className='descricao'>MySQL</figcaption>
          </figure>
        </div>
  
        <i ref={e => arrowIconsRef.current[1] = e} className='fa-solid fa-angle-right' id='right'></i>
      </div>
    </div>

  )
}

export default Stacks;