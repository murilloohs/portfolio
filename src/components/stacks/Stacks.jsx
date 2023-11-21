import React, { useRef, useEffect, useCallback, useState} from 'react';
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

  const [isDragStart, setIsDragStart] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);

  const dragStart = (e) => {
    setIsDragStart(true);
    setPrevPageX(e.pageX);
    setPrevScrollLeft(carouselRef.current.scrollLeft);
  }

  const dragging = useCallback((e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  }, [isDragStart, prevPageX, prevScrollLeft])

  const dragStop = () => {
    setIsDragStart(false);
  }
  
  useEffect(() => {
    const carouselElement = carouselRef.current;

    carouselElement.addEventListener("mousedown", dragStart);
    carouselElement.addEventListener("mousemove", dragging);
    carouselElement.addEventListener("mouseup", dragStop);
    carouselElement.addEventListener("mouseout", dragStop);

    return () => {
      carouselElement.removeEventListener("mousemove", dragging);
    };
  }, [dragging]);

  useEffect(() => {
    const arrowIconsElement = arrowIconsRef.current;
    let firstImgWidth = firstImage.current.clientWidth + 80;

    const handleClick = (e) => {
      carouselRef.current.scrollLeft += e.target.id === 'left' ? -firstImgWidth : firstImgWidth;
    };

    arrowIconsElement.forEach(icon => {
      icon.addEventListener("click", handleClick);
    });

    return () => {
      arrowIconsElement.forEach(icon => {
        icon.removeEventListener("click", handleClick);
      });
    };
  }, [])

  return (
    <div className='div-stacks' >
      <div className='wrapper-stacks' >
        <i ref={e => arrowIconsRef.current[0] = e} className='fa-solid fa-angle-left' id='left'></i>
  
        <div ref={carouselRef} className='carousel'>
          <img src={Html} alt='logo HTML' ref={firstImage} />
          <img src={Css} alt='logo CSS' />
          <img src={Javascript} alt='logo JavaScript' />
          <img src={ReactLogo} alt='logo React' />
          <img src={Java} alt='logo java' />
          <img src={Mysql} alt='logo MySQL' />
        </div>
  
        <i ref={e => arrowIconsRef.current[1] = e} className='fa-solid fa-angle-right' id='right'></i>
      </div>
    </div>

  )
}

export default Stacks;