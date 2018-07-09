import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

import Logo from 'icons/logo.svg';

class WhyReact extends Component {
  render() {
    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle>What is React?</SlideTitle>
        <SlideContent align='center'>
          <img style={{ width: 200, height: 200 }} src={Logo} />
          <div>
            React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
          </div>
        </SlideContent>
      </Slide>
    );
  }
}

export default WhyReact;
