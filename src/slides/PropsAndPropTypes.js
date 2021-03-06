import React, { Component } from 'react';

import { CodePane } from 'spectacle';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
                Props are read only and are passed from Parent to Child
              </ListItem>
              <ListItem>
                Any type that Javascript supports can be passed in; objects, arrays,
                primitives, functions, etc.
              </ListItem>
              <ListItem>
                PropTypes are a way to provide type checking at runtime in a development environment
              </ListItem>
            </List>
          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

const CodeExample = `
class Article extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    numberOfPages: PropTypes.number
  }

  render() {
    return (
      <div className="article-container">
        <h1>{this.props.name}</h1>
        <h2>Written by {this.props.author}</h2>
        <p>
          {this.props.description}
        </p>
      </div>
    );
  }
}`;


export default withStyles(styles)(PropsAndPropTypes);
