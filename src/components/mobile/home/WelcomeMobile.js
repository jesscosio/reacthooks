import React from 'react';
import CalendarMobile from '../calendar/CalendarMobile';

function WelcomeMobile(props) {
    return (<div>
        <CalendarMobile />
        <h1>Hello, {props.name} on mobile</h1>
    </div>);
        
}

export default WelcomeMobile;