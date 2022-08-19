import React from "react"
import propTypes from "prop-types"
import { MessageWrapper } from "./Message.styled"

function Message({ text, status }) {
  return (
    <MessageWrapper className="message-handle" status={status}>
      {text}
    </MessageWrapper>
  )
}

Message.defaulProps = {
  status: "success",
}

Message.propTypes = {
  text: propTypes.string.isRequired,
  status: propTypes.string,
}

export default Message
