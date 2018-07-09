import React, { Component } from 'react';

import { CodePane } from 'spectacle';
import Typography from '@material-ui/core/Typography';

import Slide from 'components/Slide';
import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

import Logo from 'icons/logo.svg';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    slideContent: {
      display: 'flex' 
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

class AComponent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle variant='display3'>
          A React Component
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
          <ul>
            <li> All React components have a render method </li>
          </ul>
        </SlideContent>
      </Slide>
    );
  }
}

const CodeExample = `
class Article extends React.Component {
  render() {
    return (
      <div className="article-container">
        <h1>{this.props.name}</h1>
        <h2>Written by {this.props.author}</h2>
        <p>
          {this.props.description}
        </p>
        {this.props.content}
      </div>
    );
  }
}`;

export default withStyles(styles)(AComponent);
