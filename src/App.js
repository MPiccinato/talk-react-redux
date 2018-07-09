import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import {
  Deck,
} from 'spectacle';

import Title from './slides/title';
import Housekeeping from './slides/housekeeping';
import WhatIsReact from 'slides/WhyReact';
import Component from 'slides/Component';

// Theme
import createTheme from 'spectacle/lib/themes/default';
const theme = createTheme({
  primary: 'white',
  secondary: 'blue',
  tertiary: 'lightgray',
  quarternary: 'lightgray'
});

// JSS Config
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

class App extends React.Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <Deck theme={theme}>
          <Title />
          <Housekeeping />
          <WhatIsReact />
          <Component />
        </Deck>
      </JssProvider>
    );
  }
}

export default App;
