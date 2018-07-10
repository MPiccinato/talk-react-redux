import React, { Component } from 'react';

import { Slide, CodePane } from 'spectacle';
import Typography from '@material-ui/core/Typography';

import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    slideContent: {
      display: 'flex',
      marginTop: '60px'
    },
    codePane: {
      fontSize: '1rem',
      '& pre': {
        maxWidth: 800,
        minWidth: '100%'
      },
    }
  };
}

class ReduxConcepts1 extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle>Redux Concepts</SlideTitle>
        <SlideContent align='left'>
          <br />
          <Typography variant='display2'>State</Typography>
          <Typography variant='headline' component='p'>
            Application state is stored as a plain object. There is no way to directly manipulate it.
          </Typography>
          <br />
          <CodePane
            lang='jsx'
            className={classes.codePane}
            source={CodeExample}
          />
        </SlideContent>
      </Slide>
    );
  }
}

const CodeExample = `
          {
            authentication: {
              userId: 3kjn3k,
              apiToken: 3k2lkjadFN#K1n3l1k3n4.el2kjer2en.avnasj3j32
            },
            todos: [
              { id: 1, title: Grocery Shopping, completed: false },
              { id: 2, title: Feed cats, completed: true},
              { id: 5, title: Research React, completed: true }
            ]
          }

`;

export default withStyles(styles)(ReduxConcepts1);
