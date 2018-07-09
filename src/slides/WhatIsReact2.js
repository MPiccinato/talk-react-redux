import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

import Logo from 'icons/logo.svg';

class WhatIsReact2 extends Component {
  render() {
    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle>What is React?</SlideTitle>
        <SlideContent align='left'>
          <Typography variant='display2'>Declarative</Typography>
          <Typography variant='headline' component='p'>
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

            Declarative views make your code more predictable and easier to debug.
          </Typography>
          <br />
          <Typography variant='display2'>Component Based</Typography>
          <Typography variant='headline' component='p'>
            Build encapsulated components that manage their own state, then compose them to make complex UIs.

            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
          </Typography>
          <Typography variant='headline' component='div' style={{ textAlign: 'right' }}>
            <a href='https://reactjs.org/'> 
              React Documentation
            </a>
          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

export default WhatIsReact2;
