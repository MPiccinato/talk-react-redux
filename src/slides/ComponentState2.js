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
      position: 'relative'
    },
    codePane: {
      fontSize: '1rem',
      maxWidth: '60%',
      minWidth: '60%',
      padding: 8,
      '& pre': {
        maxWidth: 800,
        minWidth: '100%'
      }
    }
  };
}

class ComponentState2 extends Component {
  
  state = { counter: 0 };

  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
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
          <Typography variant='headline'>
            <List>
              <ListItem>
                State is held internally to a component
              </ListItem>
              <ListItem>
                Updating the state will cause a component to re-render
              </ListItem>
              <ListItem>
                { `Updating the state directly is not allowed, use this.setState( { object } )` }
              </ListItem>
            </List>
          </Typography>

        </SlideContent>
      </Slide>
    );
  }
}

const CodeExample = `
class Counter extends React.Component {
  state = { counter: 0 };

  onClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick}> 
          Click Me 
        </Button>
      </div>
    );
  }
}`;

export default withStyles(styles)(ComponentState2);
