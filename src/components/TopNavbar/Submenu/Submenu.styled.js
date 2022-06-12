/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledSubmenu = styled.ul`
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 0;
  border-radius: 5px;
  padding: 0.6rem 0;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.05);
  top: 22px;

  > li {
    list-style: none;
    padding: 2px 1rem;
    a,
    span {
      color: ${({ theme }) => theme.colors.gray_dark};
      text-decoration: none;
      font-family: 'Gilroy-Light', sans-serif;
      white-space: nowrap;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray};
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    position: static;
    margin: 0.5rem 0 0 0;
    padding: 0 0 0 0.8rem;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0;
    align-items: flex-start;
    gap: 0.3rem;

    > li {
      list-style: none;
      padding: 2px 0;
      a,
      span {
        font-size: 1.2rem;
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
