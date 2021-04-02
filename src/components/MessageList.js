import { makeStyles } from "@material-ui/core";
import { List } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { messagesRef } from "../firebase";
import MessageItem from "./MessageItem";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: "auto",
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    console.log("useEffect");
    messagesRef
      .orderByKey()
      .limitToLast(20)
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

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }) => {
        return <MessageItem key={key} name={name} text={text} />;
      })}
    </List>
  );
};

export default MessageList;
