import styled from "styled-components"

export const StyledTopNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5rem;

  .toggle-menu-mobile,
  .close-menu-mobile {
    display: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 2rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 1rem;

    .toggle-menu-mobile,
    .close-menu-mobile {
      display: block;
      color: ${({ theme }) => theme.colors.gray};
      font-size: 1.8rem;
      cursor: pointer;
    }

    .close-menu-mobile {
      position: absolute;
      top: 25px;
      right: 25px;
      color: ${({ theme }) => theme.colors.gray_dark};
      font-size: 2rem;
      z-index: 99999;
    }
  }
`

export const WrapperLogo = styled.div`
  img {
    width: 80px;
    height: auto;
    object-fit: contain;
  }

  @media ${({ theme }) => theme.media.mobile} {
    img {
      width: 100px;
    }
  }
`

export const WrapperNav = styled.div`
  > ul {
    display: flex;
    margin: 0;
    padding: 0;
    gap: 0 2rem;
    position: relative;
  }

  @media ${({ theme }) => theme.media.tablet} {
    > ul {
      gap: 0 1rem;
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: ${(props) => (props.active ? "block" : "none")};
    position: fixed;
    inset: 0;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.7);
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;

    > ul {
      width: 80%;
      background-color: ${({ theme }) => theme.colors.gray};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      height: 100%;
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
  }

  @keyframes openMenu {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes closeMenu {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes opacityDown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`
