import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import {
  Deck,
} from 'spectacle';

import Title from './slides/title';
import Housekeeping from './slides/housekeeping';
import WhatIsReact1 from 'slides/WhatIsReact1';
import WhatIsReact2 from 'slides/WhatIsReact2';
import WhyReact from 'slides/WhyReact';
import Others from 'slides/Others';
import Component from 'slides/Component';
import JSX from 'slides/JSX';

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
          <WhatIsReact1 />
          <WhatIsReact2 />
          <WhyReact />
          <Others />
          <Component />
          <JSX />
        </Deck>
      </JssProvider>
    );
  }
}

export default App;
