/* eslint-disable react/forbid-prop-types */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import MenuItem from './MenuItem';
import { StyledTopNavbar, WrapperLogo, WrapperNav } from './TopNavbar.styled';
import imgLogo from './logo.png';

function TopNavbar({ logo, navigation }) {
  const [showMobile, setShowMobile] = useState(false);
  const nav = useRef();
  const containerNav = useRef();

  const handleMenuMobile = (state) => {
    if (window.screen.width <= 575) {
      if (!state) {
        nav.current.style.animationName = 'closeMenu';
        containerNav.current.animationName = 'opacityDown';
        setTimeout(() => {
          setShowMobile(state);
        }, 500);
      } else {
        nav.current.style.animationName = 'openMenu';
        setShowMobile(state);
      }
    }
  };

  return (
    <StyledTopNavbar>
      <WrapperLogo>
        <Link to="/">
          <img src={logo} alt="Kodify POS" />
        </Link>
      </WrapperLogo>
      <WrapperNav ref={containerNav} active={showMobile}>
        <ul ref={nav}>
          <IoClose
            className="close-menu-mobile"
            onClick={() => handleMenuMobile(false)}
          />
          {navigation.map((item) => (
            <MenuItem key={item.label} item={item} />
          ))}
        </ul>
      </WrapperNav>
      <BiMenu
        className="toggle-menu-mobile"
        onClick={() => handleMenuMobile(true)}
      />
    </StyledTopNavbar>
  );
}

TopNavbar.defaultProp = {
  logo: imgLogo
};

TopNavbar.propTypes = {
  logo: PropTypes.string.isRequired,
  navigation: PropTypes.array.isRequired
};

export default TopNavbar;
