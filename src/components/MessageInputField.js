import { Avatar, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { gravatarPath } from "../gravatart";
import MessageField from "./MessageField";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
  },
});

const MessageInputField = ({ name }) => {
  const [text, setText] = useState("");
  const classes = useStyles();
  const avatarPath = gravatarPath("mk.9.q.kyu@gmail.com");
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid xs={10}>
          <MessageField name={name} setText={setText} text={text} />
        </Grid>
        <Grid xs={1}>やあ</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
