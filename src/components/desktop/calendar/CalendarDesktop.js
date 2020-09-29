import React from 'react';
import '../../../styles/desktop/calendarDesktop.css'
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

function CalendarDesktop(props) {

    return <div id="calendar">
        {/* <div className="calendar-header">
            <div className="date-selector-btns">
                <div class="btn-group" role="group" aria-label="calendar navigation">
                    <button type="button" className="btn btn-outline-primary week-selector-btn">&lt;</button>
                    <button type="button" className="btn btn-outline-primary week-selector-btn">&gt;</button>
                </div>
                
                <button type="button" className="btn btn-outline-primary reset-calendar-btn">today</button>
            </div>
            <div>Month Day - Month Day, Year</div>
        </div> */}
        
        <div className="calendar-content">
            {/* for each day of the week list hourly entries stacked horizontally */}
            <FullCalendar
                plugins={[ timeGridPlugin ]}
                initialView="timeGridWeek"
                weekends={false}
            />
        </div>
        <h6 className="calendar-footer">Notes:</h6>
        
    </div>
}


export default CalendarDesktop;