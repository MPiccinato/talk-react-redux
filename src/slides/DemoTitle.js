import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

class DemoTitle extends Component {
  render() {
    return (
      <Slide>
        <Typography variant='display4'>A Real World Demo</Typography>
      </Slide>
    );
  }
}

export default DemoTitle;
