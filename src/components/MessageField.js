import { TextField } from "@material-ui/core";
import React from "react";

const MessageField = ({ inputEl, setText, text }) => {
  return (
    <TextField
      autoFocus
      inputRef={inputEl}
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      value={text}
    />
  );
};

export default MessageField;
