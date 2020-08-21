import React, { useState, useEffect } from 'react';

import EventCard from '../../components/event-card/event-card.component';
import axios from 'axios';

const Agenda = () => {
  const [events, setEvents] = useState();

  const getEvents = async () => {
    const result = await axios('/api/events');
    const events = result.data;
    setEvents(events);
  };

  const generateEvents = (events) => {
    return events.map((event) => <EventCard props={event} key={event._id} />);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="agenda">
      {events
        ? generateEvents(events)
        : 'Er staan op dit moment geen evenementen op de agenda.'}
    </div>
  );
};

export default Agenda;
