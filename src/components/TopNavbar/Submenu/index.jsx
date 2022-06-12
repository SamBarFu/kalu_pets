/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSubmenu } from './Submenu.styled';

function Submenu({ items, show }) {
  if (!show) return null;

  const hasPath = (menuItem) => {
    if (menuItem.path) {
      return (
        <Link to={menuItem.path} className="submenu-item">
          {menuItem.label}
        </Link>
      );
    }
    return <span className="submenu-item">{menuItem.label}</span>;
  };

  return (
    <StyledSubmenu>
      {items.map((item) => (
        <li key={item.label}>{hasPath(item)}</li>
      ))}
    </StyledSubmenu>
  );
}

export default Submenu;
