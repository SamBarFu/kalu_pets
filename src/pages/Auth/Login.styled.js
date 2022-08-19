import styled from "styled-components"

export const FormWrapper = styled.section`
  width: 65%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-top: 4rem;

  .message-handle {
    position: absolute;
    top: -3.5rem;
  }

  form {
    width: 100%;

    .forgot-password {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-weight: 400;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 14px;
      margin-bottom: 1rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

export const FooterFormWrapper = styled.small`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  margin-top: 4rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`
