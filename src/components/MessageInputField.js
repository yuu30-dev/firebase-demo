import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';

import { gravatarPath } from '../gravatar';

import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

const MessageInputField = ({ name }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <MessageField name={name} text={text} setText={setText} />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton name={name} text={text} setText={setText} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
