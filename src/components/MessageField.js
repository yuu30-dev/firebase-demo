import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const MessageField = ({ name, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <TextField
      fullWidth
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (isComposed || e.target.value === '') return;
        if (e.key === 'Enter') {
          e.preventDefault();
          setText('');
        }
      }}
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
    />
  );
};

export default MessageField;
