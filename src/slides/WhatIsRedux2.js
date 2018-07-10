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
        <SlideContent align='left'>
          <Typography variant='display2'>Predicatable</Typography>
          <Typography variant='headline' component='p'>
            Redux works to help make state mutations predictable. The state is immutable, the only way to change it is through dispatching an <b>action</b>. Actions are handled through functions called <b>reducers</b>. These may only return new portions of the state tree.
          </Typography>
          <br />
          <Typography variant='display2'>All in one place</Typography>
          <Typography variant='headline' component='p'>
            A single store for an applications state can make the UI easy to reason about. It also enables some useful techniques such as centralized logging of all updates, undo/redo, persistence and snapshots.
          </Typography>
          <Typography variant='headline' component='div' style={{ textAlign: 'right' }}>
            <a href='https://redux.js.org/'> 
              Redux Documentation
            </a>
          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

export default WhatIsRedux1;
