import React, { Component } from 'react';

import { CodePane } from 'spectacle';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import { Slide } from 'spectacle';
import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

import Logo from 'icons/logo.svg';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    slideContent: {
      marginTop: '60px',
    },
    codePane: {
      fontSize: '1rem',
      maxWidth: '50%',
      minWidth: '50%',
      '& pre': {
        maxWidth: 800,
        minWidth: '100%'
      }
    }
  };
}

class JSX extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle variant='display4'>JSX</SlideTitle>
        <SlideContent 
          align='center' 
          className={classes.slideContent} 
        >
          <CodePane
            lang='jsx'
            className={classes.codePane}
            source={CodeExample}
          />
          <p>
            JSX provides syntactic sugar for the React.createElement function
          </p>
        </SlideContent>
      </Slide>
    );
  }
}

const CodeExample = 
`  // JSX
  const Hello = (props) => (
    <div>Hello!</div>
  )

  // After
  const Hello = (props) => (
    React.createElement('div', null, 'Hello!');
  );
`;


export default withStyles(styles)(JSX);
