import React from 'react';
import './styles.css';

import face from '../../assets/face.png'
import twitter from '../../assets/twitter.png'
import piterest from '../../assets/pinterest.png'
import t from '../../assets/t.png'
import googleplus from '../../assets/googleplus.png'

function Menu() {
  return (
    <footer className="footer">
      <div className="footer-int">
        <div className="newsletter">
          <p>Sing up for our Newsletter</p>
          <p>Sing up for our newsletter and get exclusive discounts!</p>
          <div>
            <input className="newsletter-input" placeholder="Enter your email"></input>
            <button className="newsletter-btn">SUBMIT</button>
          </div>
        </div>
        <div >
          <div className="footer-link-area">
            <a className="footer-link" href="#">COMPANY</a>
            <a className="footer-link" href="#">CONTACT US</a>
            <a className="footer-link" href="#">SHIPPING</a>
            <a className="footer-link" href="#">RETURNS</a>
            <a className="footer-link" href="#">CARRERS</a>
          </div>
          <div>
            <a className="footer-link" href="#"><img src={face} alt="#" /></a>
            <a className="footer-link" href="#"><img src={twitter} alt="#" /></a>
            <a className="footer-link" href="#"><img src={piterest} alt="#" /></a>
            <a className="footer-link" href="#"><img src={t} alt="#" /></a>
            <a className="footer-link" href="#"><img src={googleplus} alt="#" /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2015 Merlin's Potions, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Menu;
