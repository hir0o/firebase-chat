import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  },
});

const MessageInputField = () => {
  const clases = useStyles();
  return <div className={clases.root}>MessageInputField</div>;
};

export default MessageInputField;
