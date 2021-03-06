import React, { useEffect, useState} from 'react';
import { Calendar, momentLocalizer, } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function MyCalendar(){

const localizer = momentLocalizer(moment)

const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {

            fetch("https://customerrest.herokuapp.com/gettrainings")
            .then(response => response.json())
            .then(data => setTrainings(data))   
    }

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      style={{ height: 500 }}
      events={trainings}
    />
  </div>
)
return(
    <div>
        <MyCalendar/>
    </div>

);

}
