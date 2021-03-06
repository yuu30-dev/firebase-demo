import React from 'react';

import { IconButton } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ inputRef, name, text, setText }) => {
  return (
    <IconButton
      disabled={text === ''}
      onClick={() => {
        pushMessage({ name, text });
        setText('');
        inputRef.current.focus();
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
