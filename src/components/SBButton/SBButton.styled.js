import styled from "styled-components"

export const ButtonStyled = styled.button`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;
  border-radius: ${(props) => (props.rounded ? "100px" : "5px")};
  background-color: ${(props) =>
    props.theme.buttons ? props.theme.buttons[props.color].bg : "#046e8f"};
  color: ${(props) =>
    props.theme.buttons ? props.theme.buttons[props.color].color : "#fff"};
  width: ${(props) => (props.extended ? "100%" : "auto")};

  &:disabled {
    background-color: ${(props) =>
      props.theme.buttons ? props.theme.buttons.disabled.bg : "#999895"};
    color: ${(props) =>
      props.theme.buttons ? props.theme.buttons.disabled.color : "#686868"};
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 8px 20px;
    font-size: 14px;
  }
`
