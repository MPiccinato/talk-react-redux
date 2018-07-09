import React, { Component } from 'react';

import { Slide as DefaultSlide } from 'spectacle';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    root: {
      //maxWidth: '90% !important'
    }
  };
}

class Slide extends Component {
  render() {
    let { classes, children, ...otherProps } = this.props;

    return (
      <DefaultSlide className={classes.root} {...otherProps}>
        {children}
      </DefaultSlide>
    );
  }
}

export default withStyles(styles)(Slide);
