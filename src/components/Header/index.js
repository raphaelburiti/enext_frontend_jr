import React from 'react';
import './styles.css';

import caldeirao from '../../assets/caldeira.png'
import menuMobile from '../../assets/menu-mobile.png'
import closeMobile from '../../assets/close-mobile.png'

function Header() {

  window.addEventListener('resize', function () {
    let nav = document.querySelector('.nav')
    let imgMenu = document.querySelector('.menu-img')
    let rigthArea = document.querySelector('.right-area')
    let leftArea = document.querySelector('.left-area')
    let centralArea = document.querySelector('.central-area')
    let headerTextMobile = document.querySelector('.header-text-mobile')

    if (window.screen.width > 962) {
      nav.style.display = 'flex'
      rigthArea.style.opacity = 100
      leftArea.style.display = 'flex'
      centralArea.style.display = 'flex'
      headerTextMobile.style.display = 'none'
    }
    if (window.innerWidth < 962 && imgMenu.src === menuMobile) {
      nav.style.display = 'none'
      rigthArea.style.opacity = 100
      leftArea.style.display = 'flex'
      centralArea.style.display = 'none'
      headerTextMobile.style.display = 'flex'
    }
    if (window.innerWidth < 962 && imgMenu.src === closeMobile) {
      nav.style.display = 'flex'
      rigthArea.style.opacity = 0
      leftArea.style.display = 'none'
      centralArea.style.display = 'flex'
      headerTextMobile.style.display = 'none'
    }
  });

  function toggleMenu() {
    let nav = document.querySelector('.nav')
    let imgMenu = document.querySelector('.menu-img')
    let rigthArea = document.querySelector('.right-area')
    let leftArea = document.querySelector('.left-area')
    let centralArea = document.querySelector('.central-area')
    let headerTextMobile = document.querySelector('.header-text-mobile')

    if (imgMenu.src === menuMobile) {
      imgMenu.src = closeMobile
      nav.style.display = 'flex'
      rigthArea.style.opacity = 0
      leftArea.style.display = 'none'
      centralArea.style.display = 'flex'
      headerTextMobile.style.display = 'none'
    } else {
      imgMenu.src = menuMobile
      nav.style.display = 'none'
      rigthArea.style.opacity = 100
      leftArea.style.display = 'flex'
      centralArea.style.display = 'none'
      headerTextMobile.style.display = 'flex'
    }
  }

  return (
    <header>
      <div className="header">
        <div className="menu-mobile">
          <img className="menu-img" onClick={() => toggleMenu()} src={menuMobile} alt="" />
        </div>

        <div className="left-area">
          <div className="left-area-title" >
            <h1 className="header-title fw-500">MERLIN'S</h1>
            &nbsp;
            <h1 className="header-title fw-300">POTIONS</h1>
          </div>

          <span>fine position since 1026</span>

        </div>

        <div className="central-area">
          <i className="material-icons search-icon">search</i>
          <input className="input-search" placeholder="Search our stock" />
        </div>

        <div className="right-area">
          <div className="header-text">
            <span className="fs-18">Free shipping</span>
            <span className="fs-14">on orders over $50</span>
          </div>
          <div className="flex-column">
            <img className="header-img" src={caldeirao} alt="#" />
            <span className="bag">BAG: &nbsp;<span className="bag-number fw-bold">1</span></span>
          </div>
        </div>

      </div>
      <div className="header-text-mobile">Free shipping on orders over $50</div>
    </header >

  );
}

export default Header;
