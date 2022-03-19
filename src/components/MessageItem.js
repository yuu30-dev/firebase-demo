import React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles({
  inline: {
    display: 'inline',
  },
});

const MessageItem = ({ name, text }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            className={classes.inline}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;
