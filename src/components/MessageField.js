import { TextField } from "@material-ui/core";
import React, { useState } from "react";

const MessageField = ({ name, setText, text }) => {
  console.log(text, name);
  const [iscomposed, setIsComposed] = useState(false);
  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (iscomposed) return;
        const text = e.target.value;
        if (text === "") return;

        if (e.key === "Enter") {
          console.log("push!!!");
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
