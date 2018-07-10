import React, { Component } from 'react';

import { CodePane } from 'spectacle';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Slide from 'components/Slide';
import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

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
          align='left' 
          className={classes.slideContent} 
        >
          <Typography variant='headline' component='p'>

          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

export default withStyles(styles)(ReduxDataFlow);
