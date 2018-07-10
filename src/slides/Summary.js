import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import { Slide } from 'spectacle';
import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

class Summary extends Component {
  render() {
    return (
      <Slide>
        <SlideTitle variant='display3'>Summary</SlideTitle>
        <SlideContent align='center'>
          <Typography variant='display1' component='p'>
            React and Redux are a powerful combination to build modern web apps with. With predictable data flow and functional components, developing and debugging become much easier. There is a huge ecosystem out there from styled UI libraries to API access patterns to help take care of common tasks.
          </Typography>
          <br />
          <Typography variant='display1' component='p'>
            And it is all just Javascript! For better or worse...
          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

export default Summary;
