import { makeStyles } from "@material-ui/core";
import { List } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import MessageItem from "./MessageItem";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: "auto",
  },
});

const MessageList = ({ roomRef }) => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    roomRef
      .orderByKey()
      .limitToLast(20)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const newMessages = Object.entries(messages).map((message) => {
          const [key, nameAndText] = message;
          return {
            key,
            ...nameAndText,
          };
        });
        setMessages(newMessages);
      });
  }, []);

  const length = messages.length;

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        return (
          <MessageItem
            isLastItem={length === index + 1}
            key={key}
            name={name}
            text={text}
          />
        );
      })}
    </List>
  );
};

export default MessageList;
