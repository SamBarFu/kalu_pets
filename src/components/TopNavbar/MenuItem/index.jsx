/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { StyledMenuItem } from './MenuItem.styled';
import Submenu from '../Submenu';

function MenuItem({ item }) {
  const [show, setShow] = useState(false);

  const handleSubmenu = () => {
    setShow(!show);
  };

  const hasSubmenu = (menuItem) => {
    if (menuItem.submenu && menuItem.submenu.length > 0) {
      return (
        <>
          <span>
            {menuItem.label}{' '}
            <FaChevronDown
              className={`arrow${show ? ' menu-item-togle' : ''}`}
            />
          </span>
          <Submenu items={menuItem.submenu} className="submenu" show={show} />
        </>
      );
    }
    return menuItem.label;
  };

  const hasPath = (menuItem) => {
    const classItem = menuItem.submenu ? 'has-submenu' : '';
    if (menuItem.path) {
      return (
        <Link to={menuItem.path} className={classItem}>
          {hasSubmenu(menuItem)}
        </Link>
      );
    }
    return <div className={classItem}>{hasSubmenu(menuItem)}</div>;
  };

  return (
    <StyledMenuItem onClick={() => handleSubmenu()}>
      {hasPath(item)}
    </StyledMenuItem>
  );
}

export default MenuItem;
