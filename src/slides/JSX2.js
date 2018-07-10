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
      display: 'flex',
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
          align='left' 
          className={classes.slideContent} 
        >
          <CodePane
            lang='jsx'
            className={classes.codePane}
            source={CodeExample}
          />
          <Typography variant='headline'>
            <List>
              <ListItem>
                JSX uses capitalization to differentiate between React Components and HTML. React Components must be uppercase and HTML elements lowercase.
              </ListItem>
              <ListItem>
                Curly braces are used to escape from JSX and back into regular JS. This is where variables from JS are inserted.
              </ListItem>
            </List>
          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

const CodeExample = 
`
  const ArticleHeading = (props) => (
    <div>
      <h1>{ props.title }</h1> 
      <AnotherComponent name={ props.name } />
    </div>
  )

  <ArticleHeading 
    title='JSX is Awesome' 
    name='David Jones' 
  />

`;


export default withStyles(styles)(JSX);
