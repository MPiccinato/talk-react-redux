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
      flexDirection: 'column'
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

class ReduxConcepts2 extends Component {
  
  state = { counter: 0 };

  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle variant='display3'>
          Redux Concepts
        </SlideTitle>
        <SlideContent 
          align='left' 
          className={classes.slideContent} 
        >
          <div className={classes.section}>
            <CodePane
              lang='jsx'
              className={classes.codePane}
              source={CodeExampleAction}
            />
            <div>
              <Typography variant='display2'>Actions</Typography>
              <Typography variant='headline' component='p'>
                These are plain Javascript objects that are dispatched to reducers
              </Typography>
            </div>
          </div>
          <br />
          <div className={classes.section}>
            <CodePane
              lang='jsx'
              className={classes.codePane}
              source={CodeExampleActionCreator}
            />
            <div>
              <Typography variant='display2'>Action Creators</Typography>
              <Typography variant='headline' component='p'>
                Special functions that assist in creating Action objects. Useful for sending UI input or bits of data to be handled in middlewares or reducers.
              </Typography>
            </div>
          </div>


        </SlideContent>
      </Slide>
    );
  }
}

const CodeExampleAction = `

{ type: 'ADD_TODO', text: 'Feed the cats' }
{ type: 'DELETE_TODO', id: 3 }


`;

const CodeExampleActionCreator = `

function addTodo(text) {
    return {
      type: 'ADD_TODO',
      text: text
    };
}

`;


export default withStyles(styles)(ReduxConcepts2);
