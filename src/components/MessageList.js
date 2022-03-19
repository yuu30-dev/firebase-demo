import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import { listenMessages } from '../firebase';
import MessageItem from './MessageItem';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%',
  },
});

const MessageList = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = listenMessages((snapshot) => {
      const messages = snapshot.val();
      if (messages == null) return;

      const newMessages = Object.entries(messages).map((entry) => {
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      });
      setMessages(newMessages);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const length = messages.length;

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        return (
          <MessageItem
            key={key}
            name={name}
            text={text}
            isLastItem={length === index + 1}
          />
        );
      })}
    </List>
  );
};

export default MessageList;
