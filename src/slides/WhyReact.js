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
        <SlideTitle variant='display3'>Why Choose React?</SlideTitle>
        <SlideContent align='center'>
          <br />
          <Typography variant='display1'>
            Declarative → Predicatable → Confidence → Reliability
          </Typography>
          <Typography variant='subheading' component='div'>
            <a href='https://www.youtube.com/watch?v=KVZ-P-ZI6W4#t=868'> 
              Tom Occhino - React.js Conf 2015 Keynote
            </a>
          </Typography>
          <br />
          <div style={{ textAlign: 'left' }}>
            <Typography variant='display1'>
              Promotes One-Way Data Flow
            </Typography>
            <Typography variant='headline'>
              <ul>
                <li>Helps make UI easy to reason about</li>
                <li>Components pass data to their children</li>
                <li>Data flows top down through the component tree</li>
              </ul>
            </Typography>
            <Typography variant='display1'>
              Learning Curve
            </Typography>
            <Typography variant='headline'>
              <p>
                Basic concepts are easy to learn but it does take a minute to 'think' in React. Teams and indivduals can do a lot with it very quickly.
              </p>
            </Typography>
          </div>
        </SlideContent>
      </Slide>
    );
  }
}

export default WhyReact;
