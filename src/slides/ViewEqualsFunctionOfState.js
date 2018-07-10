import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

class ViewEqualsFunctionOfState extends Component {
  render() {
    return (
      <Slide align='flex-start flex-start' fit={false}>
        <SlideTitle>view = f(state)</SlideTitle>
        <SlideContent align='center'>
          <p>
            Since we can think about components as functions and we can easily compose them, we can then focus on our UI being a function of our state.
          </p>
        </SlideContent>
      </Slide>
    );
  }
}

export default ViewEqualsFunctionOfState;
