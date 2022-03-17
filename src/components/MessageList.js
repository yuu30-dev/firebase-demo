import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { listenMessages } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
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

  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
