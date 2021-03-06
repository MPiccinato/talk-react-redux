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
          <CodePane
            lang='jsx'
            className={classes.codePane}
            source={CodeExample}
          />
          <div>
            <Typography variant='display2'>Reducers</Typography>
            <Typography variant='headline' component='p'>
              State update logic is handled by functions in a <b>reducer</b>, which is also just a function. Actions are handled in a first in last out order and only one is handled at a time. This makes reducers very easily testable and straightforward.
              <br />
              <br />
              Reducers must return a new object and treat incoming state and actions as immutable. State is generally copied, mutated and then returned.
            </Typography>
          </div>
        </SlideContent>
      </Slide>
    );
  }
}

const CodeExample = `
const ACTION_HANDLERS = {
  'ADD_TODO': (state, action) => {
    return {
      todos: [
        ...state.todos,
        action.todo
      ]
    }
  }
};

function settingsReducer(state, action) {
  return ACTION_HANDLERS[action.type] || state;
}

`;

export default withStyles(styles)(ReduxConcepts2);
