import React, { useEffect, useState } from 'react';
import { Overlay, TeamModalWrapper } from './TeamModal.styled';
import icons from '../../img/icons.svg';
import card1 from '../../img/team/Ivan Barei.jpg';
import card2 from '../../img/team/Yurii Kniaz.jpg';
import card3 from '../../img/team/Olha Izbash.jpg';
import card4 from '../../img/team/Oleksii Oliinyk.jpg';
import card5 from '../../img/team/Edik Guloyan.jpg';
import card6 from '../../img/team/Artem Chemerys.jpg';
import card7 from '../../img/team/Vladislav Zhykhariev.jpg';
import card8 from '../../img/team/Oleksandr Klymovych.jpg';
import card9 from '../../img/team/Diana Akhanonu.jpg';
import card10 from '../../img/team/Christian Aviss.jpg';
import card11 from '../../img/team/Viktor Katerinich.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  A11y,
  FreeMode,
  Keyboard,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';

const TeamModal = ({ onClose }) => {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  function getSlidesPerView() {
    if (window.innerWidth < 767) {
      return 1;
    } else {
      return 4;
    }
  }
  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);

    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', onEsc);
      window.removeEventListener('resize', handleResize);
    };
  }, [onClose]);

  return (
    <Overlay>
      <TeamModalWrapper className="dark-team-modal-wrapper">
        <div className="team-modal">
          <div className="team-mdl">
            <button onClick={onClose}>
              <svg width="24" height="24">
                <use href={icons + '#icon-close-setting'}></use>
              </svg>
            </button>
            <div className="team-modal-title">
              <p>Team</p>
              <h2>"The Kingdom of Code"</h2>
            </div>

            <Swiper
              modules={[
                Navigation,
                Pagination,
                A11y,
                FreeMode,
                Keyboard,
                Autoplay,
              ]}
              spaceBetween={30}
              slidesPerView={slidesPerView}
              keyboard={{ enabled: true }}
              autoplay={{
                delay: 30000,
                disableOnInteraction: false,
              }}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className="card-container"
            >
              <SwiperSlide key={1} className="team-list">
                <img src={card1} width="195" alt="" />
                <div className="card-content">
                  <h3>Ivan Barei</h3>
                  <p>Team Lead</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/ivan-barei/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/barinio"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide key={2} className="team-list">
                <img src={card2} width="195" alt="" />
                <div className="card-content">
                  <h3>Yurii Kniaz</h3>
                  <p>Scrum Master</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/yurii-kniaz/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/YuriiKniaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide key={3} className="team-list">
                <img src={card3} width="195" alt="" />
                <div className="card-content">
                  <h3>Olha Izbash</h3>
                  <p>Front-end Developer</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/olha-izbash/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/olhaizbash"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide key={4} className="team-list">
                <img src={card4} width="195" alt="" />
                <div className="card-content">
                  <h3>Oleksii Oliinyk</h3>
                  <p>Back-end Developer</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/oleksii-oliinyk-84301840/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/Oleksii89"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide key={5} className="team-list">
                <img src={card5} width="195" alt="" />
                <div className="card-content">
                  <h3>Edik Guloyan</h3>
                  <p>Back-end Developer</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/edik-guloyan/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/Edik01"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide key={6} className="team-list">
                <img src={card6} width="195" alt="" />
                <div className="card-content">
                  <h3>Artem Chemerys</h3>
                  <p>Front-end Developer</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/artem-chemerys/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/Artchem"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide key={7} className="team-list">
                <img
                  src={card7}
                  width="195"
                  alt=""
                  style={{ width: '266px' }}
                />
                <div className="card-content">
                  <h3>Vladislav Zhykhariev</h3>
                  <p>Back-end Developer</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/vladislav-zhykhariev-857130180/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/Zhihare"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide key={8} className="team-list">
                <img src={card8} width="195" alt="" />
                <div className="card-content">
                  <h3>Oleksandr Klymovych</h3>
                  <p>Front-end Developer</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/oleksandr-klymovych/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/Santel1"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide key={9} className="team-list">
                <img src={card9} width="195" alt="" />
                <div className="card-content">
                  <h3>Diana Akhanonu</h3>
                  <p>Front-end Developer</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/diana-akhanonu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/rosyven"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide key={10} className="team-list">
                <img src={card10} width="195" alt="" />
                <div className="card-content">
                  <h3>Christian Aviss</h3>
                  <p>Back-end Developer</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/christian-aviss/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/Vitammiin"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide key={11} className="team-list">
                <img src={card11} width="195" alt="" />
                <div className="card-content">
                  <h3>Viktor Katerinich</h3>
                  <p>Front-end Developer</p>
                  <ul className="team-icon-list">
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://www.linkedin.com/in/%D0%B2%D1%96%D0%BA%D1%82%D0%BE%D1%80-%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B8%D1%87-0b10b9267/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="team-icon" width="16" height="16">
                          <use href={icons + '#icon-linkedin'}></use>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="team-icon-link"
                        href="https://github.com/KaterinichViktor"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#5b5b5b' }}
                      >
                        <svg className="team-icon" width="18" height="18">
                          <use href={icons + '#icon-github'}></use>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </TeamModalWrapper>
    </Overlay>
  );
};

export default TeamModal;
