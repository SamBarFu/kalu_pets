/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledMenuItem = styled.li`
  list-style: none;
  position: relative;
  cursor: pointer;

  a,
  .has-submenu > span {
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
    font-family: 'Gilroy-Light', sans-serif;
    font-size: 1.1rem;
  }

  .has-submenu {
    span {
      display: flex;
      align-items: center;
      gap: 0 5px;
      .arrow {
        font-size: 14px;
        transition: all 0.4s;
      }
      .arrow.menu-item-togle {
        transform: rotate(180deg);
        transition: all 0.4s;
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    a,
    .has-submenu > span {
      font-size: 1rem;
    }

    .has-submenu span .arrow {
      font-size: 12px;
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    a,
    .has-submenu > span {
      color: ${({ theme }) => theme.colors.gray_dark};
      font-size: 1.5rem;
    }
  }
`;
