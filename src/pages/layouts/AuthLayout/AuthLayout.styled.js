import styled from "styled-components"

export const AuthWrappper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};

  .container-auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    img.logo {
      width: 200px;
      margin-top: 2rem;
    }

    img.image-logo {
      width: 60%;
      margin: auto 0;
    }

    footer {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-weight: 400;
      color: ${({ theme }) => theme.colors.quaternary};
      text-align: center;
      font-size: 12px;
    }
  }

  .container-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.quaternary};
    margin: 1.5rem 2rem 1.5rem 0;
    border-radius: 20px;
    padding: 2rem;
  }

  .header-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 60px;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-weight: 500;
      font-size: 2.5rem;
      margin: 0;
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
    }
    p {
      width: 80%;
      font-family: ${({ theme }) => theme.fonts.primary};
      font-weight: 400;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.dark};
      margin: 8px 0 0;
      text-align: center;
    }
  }
`
