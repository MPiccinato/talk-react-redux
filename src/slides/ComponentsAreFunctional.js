import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

class ComponentsAreFunctional extends Component {
  render() {
    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle variant='display3'>Components are Functions</SlideTitle>
        <SlideContent align='center'>
          <br />
          <Typography variant='display1'>
            <p>
              Functions take parameters and return a result. Components take in props and return UI. Given the same input a component will return the same UI.
            </p>
            <p>
              This is true for class based components which can hold their own state. Focusing on keeping them a function of their props keeps them easy to reason about.
            </p>
          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

export default ComponentsAreFunctional;
