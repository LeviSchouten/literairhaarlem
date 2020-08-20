import React from 'react';

import Employee from '../../components/employee/employee.component.jsx';

import './over.styles.scss';

const Over = () => {
  return (
    <div className="over">
      <div className="section">
        <div className="title">Wat doen wij?</div>
        <div className="text">
          <p>
            Stichting Literair Haarlem organiseert literaire evenementen in
            Haarlem. De stichtingsbestuur bestaat uit: Maarten Brock
            (voorzitter), Karlijn Waterman (secretaris), Hans Nusselder
            (penningmeester), Eric J. Coolen, Vincent Elzinga,
          </p>
          <p>
            Flip Hamann en Henny Leeflang. Minimaal vier maal per jaar
            organiseert Literair Haarlem een grootschalig literair evenement in
            Noord-Hollands Archief/Janskerk te Haarlem. Veelal in samenwerking
            met het Ampzing Genootschap.
          </p>
        </div>
      </div>
      <hr />
      <div className="section">
        <div className="title">Het Team</div>
        <div className="team">
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </div>
      </div>
    </div>
  );
};

export default Over;
