import React from 'react';

import './event-card.styles.scss';

const EventCard = ({ props }) => {
  console.log(props);
  return (
    <div className="event-card">
      <div className="section">
        <div className="date">{props.datum}</div>
        <div className="title">{props.titel}</div>
        <div className="content-short">{props.inhoud_kort}</div>
        <div className="read-more">Lees meer</div>
      </div>
      <div className="image"></div>
    </div>
  );
};

export default EventCard;
