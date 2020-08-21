import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import './evenement.styles.scss';

const Evenement = () => {
  const [event, setEvent] = useState();

  const location = useLocation().pathname;
  const id = location.substr(location.lastIndexOf('/') + 1);

  const getEventById = async (id) => {
    const result = await axios('/api/events/' + id);
    const event = result.data;
    setEvent(event);
  };

  useEffect(() => {
    getEventById(id);
  }, []);

  if (!event) {
    return <div className="evenement">Geen evenement gevonden</div>;
  }

  return (
    <div className="evenement">
      <div className="textarea">
        <div className="title">{event.titel}</div>
        <div className="date">{event.datum}</div>
        <div className="content-long">{event.inhoud_lang}</div>
        <div className="price">Tickets voor €{event.prijs}</div>
        <div className="location">{event.locatie}</div>
      </div>
      <div
        className="image"
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      ></div>
    </div>
  );
};

export default Evenement;
