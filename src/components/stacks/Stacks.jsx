import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Stacks.css';

import Html from '../../images/html.png';
import Css from '../../images/css.png';
import Javascript from '../../images/javascript.png';
import ReactLogo from '../../images/react.png';
import Java from '../../images/java.png';
import Mysql from '../../images/mysql.png';
import Python from '../../images/python.png';
import Php from '../../images/php.png'

const stacksData = [
  { src: Html, alt: 'Logo HTML', caption: 'HTML' },
  { src: Css, alt: 'Logo CSS', caption: 'CSS' },
  { src: Javascript, alt: 'Logo JavaScript', caption: 'JavaScript' },
  { src: ReactLogo, alt: 'Logo React', caption: 'React' },
  { src: Python, alt: 'Logo Python', caption: 'Python' },
  { src: Php, alt: 'Logo Php', caption: 'PHP' },
  { src: Java, alt: 'Logo Java', caption: 'Java' },
  { src: Mysql, alt: 'Logo MySQL', caption: 'MySQL' },
];

const Stacks = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className='div-stacks'>
      <div className='wrapper-stacks'>
        <div ref={navigationPrevRef} className="swiper-button-prev"></div>
        
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          pagination={{ clickable: true }}
          loop={false}
          spaceBetween={25}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
          }}
          className="mySwiper"
        >
          {stacksData.map((stack, index) => (
            <SwiperSlide key={index}>
              <figure className="stack-figure">
                <img src={stack.src} alt={stack.alt} />
                <figcaption className="descricao">{stack.caption}</figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <div ref={navigationNextRef} className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Stacks;