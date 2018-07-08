import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

class Title extends Component {
  render() {
    return (
      <Slide>
        <Typography variant='display4'>React + Redux</Typography>
        <Typography variant='display1'>Mathew Piccinato</Typography>
      </Slide>
    );
  }
}

export default Title;
