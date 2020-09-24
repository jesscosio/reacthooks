import React from 'react';
import {useViewport} from '../util/ViewportProvider';
import WelcomeMobile from './mobile/WelcomeMobile';
import WelcomeDesktop from './desktop/WelcomeDesktop';

function Welcome(props) {
    const {width} = useViewport();
    // The width below which the mobile view should be rendered
    const breakpoint = 620;


    /* If the viewport is more narrow than the breakpoint render the
    mobile component, else render the desktop component */
    return width < breakpoint ? 
        <WelcomeMobile name={props.name} /> : <WelcomeDesktop name={props.name}/> ;
}

export default Welcome;