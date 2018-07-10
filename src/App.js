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
import ReactComponentsTitle from './slides/ReactComponentsTitle';
import Component from 'slides/Component';
import ComponentFunctional from 'slides/ComponentFunctional';
import ComponentsAreFunctional from 'slides/ComponentsAreFunctional';
import JSX from 'slides/JSX';
import JSX2 from 'slides/JSX2';
import AllTogether from 'slides/AllTogether';
import PassingProps from 'slides/PassingProps';
import PropsAndPropTypes from 'slides/PropsAndPropTypes';
import ComponentState from 'slides/ComponentState';
import ComponentState2 from 'slides/ComponentState2';
import ViewEqualsFunctionOfState from 'slides/ViewEqualsFunctionOfState';
import ReduxTitle from 'slides/ReduxTitle';
import WhatIsRedux1 from 'slides/WhatIsRedux1';
import WhatIsRedux2 from 'slides/WhatIsRedux2';
import ReduxConcepts from 'slides/ReduxConcepts';
import ReduxConcepts2 from 'slides/ReduxConcepts2';
import ReduxConcepts3 from 'slides/ReduxConcepts3';

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
          <ReactComponentsTitle />
          <Component />
          <ComponentFunctional />
          <ComponentsAreFunctional />
          <JSX />
          <JSX2 />
          <AllTogether />
          <PassingProps />
          <PropsAndPropTypes />
          <ComponentState />
          <ComponentState2 />
          <ViewEqualsFunctionOfState />
          <ReduxTitle />
          <WhatIsRedux1 />
          <WhatIsRedux2 />
          <ReduxConcepts />
          <ReduxConcepts2 />
          <ReduxConcepts3 />
        </Deck>
      </JssProvider>
    );
  }
}

export default App;
