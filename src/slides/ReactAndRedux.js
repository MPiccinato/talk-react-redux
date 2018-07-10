import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

import Logo from 'icons/reduxlogo.svg';

class ReactAndRedux extends Component {
  render() {
    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle>React and Redux</SlideTitle>
        <SlideContent align='left'>
          <Typography variant='display2'>Shared State</Typography>
          <Typography variant='headline' component='p'>
            Components are able to hold onto their own internal state. It is very possible to use React without Redux and keep data sprinkled through out components. This becomes an issue when two very different components would like to share state. Storing state outside the component tree makes it easier to share.
          </Typography>
          <br />
          <Typography variant='display2'>A Connected UI</Typography>
          <Typography variant='headline' component='p'>
            React is efficient, most of the time, at updating your UI when reacting to prop changes. Redux helps connect components to your applications state in a way that is easy to follow. Each action is applied synchronously and the UI is updated in the same manor.
          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

export default ReactAndRedux;
