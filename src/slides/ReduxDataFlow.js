import React, { Component } from 'react';

import { CodePane } from 'spectacle';
import ReduxFlow from 'icons/redux.gif';

import Slide from 'components/Slide';
import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    slideContent: {
      display: 'flex',
      marginTop: '60px',
      alignItems: 'center',
      position: 'relative',
    },
    section: {
      display: 'flex'
    },
    codePane: {
      fontSize: '1rem',
      maxWidth: '50%',
      minWidth: '50%',
      padding: 8,
      marginRight: 20,
      '& pre': {
        maxWidth: 800,
        minWidth: '100%'
      }
    }
  };
}

class ReduxDataFlow extends Component {
  
  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle variant='display3'>
          Redux Data Flow
        </SlideTitle>
        <SlideContent 
          align='center' 
          className={classes.slideContent} 
        >
          <img src={ReduxFlow} style={{ width: '80%', height: '80%' }} />
          <Typography variant='headline' component='p'>
            <b>Uni-directional data flow</b> is Redux's bread and butter. This is opposed to other ideas such as two-way data binding.
          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

export default withStyles(styles)(ReduxDataFlow);
