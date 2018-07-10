import React, { Component } from 'react';

import { CodePane } from 'spectacle';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import Slide from 'components/Slide';
import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

import Logo from 'icons/logo.svg';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    slideContent: {
      display: 'flex',
      marginTop: '60px',
      alignItems: 'center'
    },
    codePane: {
      fontSize: '1rem',
      maxWidth: '50%',
      minWidth: '50%',
      padding: 8,
      '& pre': {
        maxWidth: 800,
        minWidth: '100%'
      }
    }
  };
}

class AComponentFunctional extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle variant='display3'>
          A Functional Component
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
          →
          <CodePane
            lang='jsx'
            className={classes.codePane}
            source={CodeExampleFunctional}
          />
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

const CodeExampleFunctional = `


const Article = (props) => (
  <div className="article-container">
    <h1>{this.props.name}</h1>
    <h2>Written by {this.props.author}</h2>
    <p>
      {this.props.description}
    </p>
    {this.props.content}
  </div>
);



`;


export default withStyles(styles)(AComponentFunctional);
