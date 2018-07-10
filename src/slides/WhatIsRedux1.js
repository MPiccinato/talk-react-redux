import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

import Logo from 'icons/reduxlogo.svg';

class WhatIsRedux1 extends Component {
  render() {
    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle>What is Redux?</SlideTitle>
        <SlideContent align='center'>
          <img style={{ width: 200, height: 200 }} src={Logo} />
          <p>
            Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently and are easy to test.
          </p>
        </SlideContent>
      </Slide>
    );
  }
}

export default WhatIsRedux1;
