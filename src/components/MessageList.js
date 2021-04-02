import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { messagesRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    console.log("useEffect");
    messagesRef
      .orderByKey()
      .limitToLast(3)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const newMessages = Object.entries(messages).map((message) => {
          console.log(message);
          const [key, nameAndText] = message;
          return {
            key,
            ...nameAndText,
          };
        });
        setMessages(newMessages);
      });
  }, []);

  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
