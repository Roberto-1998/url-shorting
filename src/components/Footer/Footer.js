import React from 'react';
import facebook from '../../../public/images/icon-facebook.svg';
import twitter from '../../../public/images/icon-twitter.svg';

import pinterest from '../../../public/images/icon-pinterest.svg';

import instagram from '../../../public/images/icon-instagram.svg';
import { ColorBox, FooterBox } from './Footer.styles';

const Footer = () => {
  return (
    <ColorBox>
      <FooterBox>
        <h1>Shortly</h1>
        <div>
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <img src={facebook} alt='Faceboof' />
          <img src={twitter} alt='Twitter' />
          <img src={pinterest} alt='Pinterest' />
          <img src={instagram} alt='Instagram' />
        </div>
      </FooterBox>
    </ColorBox>
  );
};

export default Footer;
