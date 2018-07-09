import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';

import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

import VueLogo from 'icons/vue.svg';
import AngularLogo from 'icons/angular.svg';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
  return {
    logos: {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    logo: {
      height: 400,
      width: 400,
    }
  };
}



class Others extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle variant='display3'>Is React the only option?</SlideTitle>
        <SlideContent align='center'>
          <Typography variant='headline'>
            <div className={classes.logos}>
              <a href='https://vuejs.org/' className={classes.logo}>
                <img src={VueLogo} />
                Vue.js
              </a>
              <a href='https://angular.io/' className={classes.logo}>
                <img src={AngularLogo} />
                Angular
              </a>
            </div>
          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

export default withStyles(styles)(Others);
