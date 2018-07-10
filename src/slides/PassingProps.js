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
    },
    articleContent: {
      width: '40%',
      lineHeight: '0.5em',
      '& h1': {
        fontSize: 22,
      },
      '& h2': {
        fontSize: 17
      },
      '& p': {
        fontSize: 14
      }
    }
  };
}

class JSX extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle variant='display4'>Passing Props</SlideTitle>
        <SlideContent 
          align='left' 
          className={classes.slideContent} 
        >
          <CodePane
            lang='jsx'
            className={classes.codePane}
            source={CodeExample}
          />
          <ArticleHeading 
            title='JSX is Awesome' 
            name='David Jones' 
            description={`
              Some long text about the article. JSX is great. Let me tell
              you some more about JSX. I need more content to fill the space
              here.
            `}
            className={classes.articleContent}
          />
        </SlideContent>
      </Slide>
    );
  }
}

const ArticleHeading = (props) => (
  <div className={props.className}>
    <h1>{ props.title }</h1> 
    <h2>written by { props.name }</h2>
    <p>
      { props.description }
    </p>
  </div>
);

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


export default withStyles(styles)(JSX);
