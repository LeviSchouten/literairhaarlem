import React from 'react';

import './employee.styles.scss';

const Employee = () => {
  return (
    <div className="employee">
      <div className="employee-header">
        <div
          className="image"
          style={{
            backgroundImage: 'url(./images/pexels-italo-melo-2379005.jpg)',
          }}
        ></div>
        <div className="employee-title">
          <div className="employee-name">John Doe</div>
          <div className="employee-position">werknemer</div>
        </div>
      </div>
      <div className="employee-content">
        <p>
          John Doe is sinds oktober 2019 eigenaar van de Haarlemse
          buurtboekwinkel Kennemer Boekhandel, waar ze een breed assortiment
          literaire fictie en non-fictie en kinderboeken hebben. Eerder werkte
          hij onder meer als fonds-, eind- en schrijvend redacteur bij
          uitgeverijen en vak- en opinieweekbladen. Hij leest graag klassiekers
          en contemporaine literatuur.
        </p>
      </div>
    </div>
  );
};

export default Employee;
