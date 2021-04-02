import { makeStyles } from "@material-ui/core";
import React from "react";
import MessageList from "./MessageList";
import MessageInputField from "./MessageInputField";
import { database } from "../firebase";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
  },
});

const Main = ({ name, room }) => {
  const classes = useStyles();
  const roomRef = database.ref(room);
  return (
    <div className={classes.root}>
      <MessageList room={room} roomRef={roomRef} />
      <MessageInputField name={name} roomRef={roomRef} />
    </div>
  );
};

export default Main;
