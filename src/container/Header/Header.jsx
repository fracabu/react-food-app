import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1 animate__animated animate__fadeInLeft">The Key To Fine Dining</h1>
      <p className="p__opensans animate__animated animate__fadeInRight" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      {/* <button type="button" className="custom__button animate__animated animate__flipInX ">Explore Menu</button> */}
      <div className="btn-container">
        <button className="pushable animate__animated animate__flipInX">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
                EXPLORE MENU
            </span>
        </button>
    </div>
    </div>

    <div className="app__wrapper_img animate__animated animate__fadeInRight">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
