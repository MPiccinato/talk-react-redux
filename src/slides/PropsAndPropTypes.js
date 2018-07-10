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

class PropsAndPropTypes extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle variant='display3'>Props and PropTypes</SlideTitle>
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
              </ListItem>
              <ListItem>
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
      <h2>written by { props.name }</h2>
      <p>{ props.description }</p>
    </div>
  )

  <ArticleHeading 
    title='JSX is Awesome' 
    name='David Jones' 
    description='Some long text...'
  />

`;


export default withStyles(styles)(PropsAndPropTypes);
