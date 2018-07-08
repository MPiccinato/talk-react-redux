import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    root: {
      color: theme.palette.text.primary
    }
  };
}

class SlideTitle extends Component {
  render() {
    return (
      <Typography variant='display4' className={this.props.classes.root}>
        {this.props.children} 
      </Typography>
    );
  }
}

export default withStyles(styles)(SlideTitle);
