import React, { Component } from 'react';

import { CodePane } from 'spectacle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Confetti from 'react-confetti'

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
      position: 'relative'
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
    },
    codeExample: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',
      alignItems: 'center'
    }
  };
}

class ComponentState extends Component {
  
  state = { counter: 0 };

  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {
            this.state.counter < 15 ?
              <Confetti 
                run={this.state.counter > 10 && this.state.counter < 15} 
                width='1000px' 
                height='1000px' 
              /> : null
          }
        </div>
        <SlideTitle variant='display3'>
          Component State
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
          <Counter 
            className={classes.codeExample} 
            onChange={ (counter) => { this.setState({ counter }) } }
          />
        </SlideContent>
      </Slide>
    );
  }
}

class Counter extends React.Component {
  state = { counter: 0 };

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1
    }, () => {
      this.props.onChange(this.state.counter);
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <Typography variant='headline'>Clicked {this.state.counter} times </Typography>
        <Button variant='contained' color='primary' onClick={this.onClick}> Click Me </Button>
      </div>
    );
  }
}

const CodeExample = `
class Counter extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick()}> Click Me </Button>
      </div>
    );
  }
}`;

export default withStyles(styles)(ComponentState);
