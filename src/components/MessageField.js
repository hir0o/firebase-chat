import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { pushMessage } from "../firebase";

const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      autoFocus
      inputRef={inputEl}
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;
        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
          pushMessage({ name, text });
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  );
};

export default MessageField;
