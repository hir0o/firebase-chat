import { Avatar, Grid, makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { gravatarPath } from "../gravatart";
import MessageField from "./MessageField";
import MessageSubmitButton from "./MessageSubmitButton";
import { pushMessage } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
  },
});

const MessageInputField = ({ name, roomRef }) => {
  const inputEl = useRef(null);
  const [text, setText] = useState("");
  const classes = useStyles();
  const avatarPath = gravatarPath("mk.9.q.kyu@gmail.com");
  return (
    <form
      className={classes.root}
      onSubmit={(e) => {
        e.preventDefault();
        pushMessage({
          ref: roomRef,
          name,
          text,
        });
        setText("");
      }}
    >
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <MessageField
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputEl={inputEl}
            setText={setText}
            text={text}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default MessageInputField;
