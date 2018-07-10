import React, { Component } from 'react';

import { Slide } from 'spectacle';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import SlideTitle from 'components/SlideTitle';
import SlideContent from 'components/SlideContent';

class ComponentsAreFunctional extends Component {
  render() {
    return (
      <Slide align='flex-start flex-start'>
        <SlideTitle variant='display3'>CSS, HTML and Javascript Oh My</SlideTitle>
        <SlideContent align='center'>
          <br />
          <Typography variant='display1'>
            <p>
              Traditionally everything was on its own. Markup in HTML, Javascript for interactions and CSS for styling. Other libraries in addition to React allow you to keep it all in one file.
            </p>
            <p>
              If code frequently changes together, it should stay together. Make components, not templates.
            </p>
            <br />
            <p>
              <a href='https://github.com/styled-components/styled-components'>Styled Components</a>
               &nbsp; | &nbsp;
              <a href='https://github.com/cssinjs/jss'>CSS in JS (JSS)</a>
            </p>
          </Typography>
        </SlideContent>
      </Slide>
    );
  }
}

export default ComponentsAreFunctional;
