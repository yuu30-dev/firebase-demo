import React, { useState } from 'react';

import config from '../config.json';

import Main from './Main';
import SignIn from './SignIn';

export default () => {
  const [name, setName] = useState('');

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} />;
  }
  return <Main name={name} />;
};
