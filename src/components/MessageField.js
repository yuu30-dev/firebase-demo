import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { pushMessage } from '../firebase';

const MessageField = ({ inputRef, name, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <TextField
      inputRef={inputRef}
      autoFocus
      fullWidth
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (isComposed || e.target.value === '') return;
        if (e.key === 'Enter') {
          e.preventDefault();
          pushMessage({ name, text });
          setText('');
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
    />
  );
};

export default MessageField;
