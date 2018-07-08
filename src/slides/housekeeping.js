import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

class Housekeeping extends Component {
  render() {
    return (
      <Slide align='flex-start flex-start' fit={false}>
        <SlideTitle>Housekeeping</SlideTitle>
        <SlideContent align='center'>
          <p>
            Code examples use modern ES6/ES7 syntax. Classes, arrow functions, spready operator, etc. React does not require these but they are super helpful when writing Javascript.
          </p>
          <p>
            Feel free to interrupt at anytime!
          </p>
        </SlideContent>
      </Slide>
    );
  }
}

export default Housekeeping;
