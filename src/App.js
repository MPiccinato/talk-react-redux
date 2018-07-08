import React, { Component } from 'react';

import {
  Deck,
} from 'spectacle';

import Title from './slides/title';
import Housekeeping from './slides/housekeeping';

// Theme
import createTheme from 'spectacle/lib/themes/default';
const theme = createTheme({
  primary: 'white',
  secondary: 'blue',
  tertiary: 'lightgray',
  quarternary: 'lightgray'
});


class App extends Component {
  render() {
    return (
      <Deck theme={theme}>
        <Title />
        <Housekeeping />
			</Deck>
    );
  }
}

export default App;
