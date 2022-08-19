import styled from "styled-components"

const message = {
  success: "#00AF54",
  alert: "crimson",
  warning: "#FBAF00",
}

export const MessageWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  color: ${(props) =>
    props.theme.messages
      ? props.theme.messages[props.status].color
      : message[props.status]};
  text-align: center;
  margin: 1rem 0;
  font-size: 15px;
`
