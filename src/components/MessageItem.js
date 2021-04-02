import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef } from "react";

import { gravatarPath } from "../gravatart";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
}));

const MessageItem = ({ name, text, isLastItem }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  const listRef = useRef(null);

  useEffect(() => {
    if (isLastItem) {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLastItem]);

  return (
    <ListItem className={classes.root} divider={true} ref={listRef}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;
