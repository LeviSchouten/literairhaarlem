import React from 'react';
import { useHistory } from 'react-router-dom';

import './event-card.styles.scss';

const EventCard = ({ props }) => {
  const history = useHistory();

  console.log(props);

  return (
    <div className="event-card">
      <div className="section">
        <div className="date">{props.datum}</div>
        <div className="title">{props.titel}</div>
        <div className="content-short">{props.inhoud_kort}</div>
        <div
          className="read-more"
          onClick={() => history.push('/agenda/' + props._id)}
        >
          Lees meer
        </div>
      </div>
      <div
        className="image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
    </div>
  );
};

export default EventCard;
