import React from "react"
import PropTypes from "prop-types"
import { ButtonStyled } from "./SBButton.styled"

function SBButton({ color, to, text, type, rounded, extended, disabled }) {
  return (
    <ButtonStyled
      color={color}
      rounded={rounded}
      type={type}
      extended={extended}
      disabled={disabled}
    >
      {to != null ? <a href="/">{text}</a> : text}
    </ButtonStyled>
  )
}

SBButton.defaultProps = {
  color: "primary",
  type: "button",
  to: null,
  rounded: false,
  extended: false,
  disabled: false,
}

SBButton.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  rounded: PropTypes.bool,
  extended: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default SBButton
