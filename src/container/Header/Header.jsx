import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding app__bg" id="home">
    <div className="app__wrapper_info">
      <SubHeading  title="Find what’s hot" />
      <h1 className="app__header-h1">We Serve the Perfect Night</h1>
      <img className = "app__header_drag1-img"src={images.drag1} alt="header_img" />
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <a href="#menu"><button  type="button" className="custom__button">Explore Menu</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;