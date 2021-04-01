import { makeStyles } from "@material-ui/core";
import React from "react";
import MessageList from "./MessageList";
import MessageImputField from "./MessageImputField";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
  },
});

const Main = ({ name }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageList />
      <MessageImputField name={name} />
    </div>
  );
};

export default Main;
