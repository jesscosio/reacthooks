import React from 'react';
import {useViewport} from './util/ViewportProvider';
import CalendarDesktop from './desktop/calendar/CalendarDesktop';
import CalendarMobile from './mobile/calendar/CalendarMobile';


function Calendar(props) {
    const {width} = useViewport();
    // The width below which the mobile view should be rendered
    const breakpoint = 620;

    return width < breakpoint ? 
        <CalendarMobile  /> : <CalendarDesktop /> ;
}

export default Calendar;