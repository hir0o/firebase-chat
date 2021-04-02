import { makeStyles } from "@material-ui/core";
import React from "react";
import MessageList from "./MessageList";
import MessageInputField from "./MessageInputField";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
  },
});

const Main = ({ name, room }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageList room={room} />
      <MessageInputField name={name} />
    </div>
  );
};

export default Main;
