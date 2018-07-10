import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

class Title extends Component {
  render() {
    return (
      <Slide>
        <Typography variant='display4'>React Components</Typography>
      </Slide>
    );
  }
}

export default Title;
