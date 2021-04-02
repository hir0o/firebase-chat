// import { makeStyles } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React from "react";

const MessageSubmitButton = ({ inputEl, setText, text }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        setText("");
        inputEl.current.focus();
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
