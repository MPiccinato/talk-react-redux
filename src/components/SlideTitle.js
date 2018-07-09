import React, { Component } from 'react';

import { Heading } from 'spectacle';
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
  static defaultProps = {
    variant: 'display4'
  }

  render() {
    const {
      children,
      ...otherProps
    } = this.props;

    return (
      <Typography {...otherProps}>
        {this.props.children} 
      </Typography>
    );
  }
}

export default withStyles(styles)(SlideTitle);
