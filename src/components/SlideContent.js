import React, { Component } from 'react';
import classnames from 'classnames';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    root: {
      color: theme.palette.text.primary,
      textAlign: 'left',
      ...theme.typography.headline,
      fontSize: theme.typography.display2.fontSize
    },
    center: {
      textAlign: 'center'
    }
  };
}

class SlideContent extends Component {
  render() {
    return (
      <div 
        className={
          classnames(
            this.props.classes.root,
            this.props.classes[this.props.align]
          )
        }
      >
        {this.props.children} 
      </div>
    );
  }
}

export default withStyles(styles)(SlideContent);
