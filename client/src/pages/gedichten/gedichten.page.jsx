import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import './gedichten.styles.scss';

const Gedichten = () => {
  const [walls, setWalls] = useState();

  const history = useHistory();

  useEffect(() => {
    axios.get('/api/walls').then((res) => setWalls(res.data));
  }, []);

  return (
    <div className="gedichten">
      <div className="section">
        <div className="title">Gedichten</div>
        <div className="paragraph">
          Hier een lijst met alle muren waar we al gedichten of teksten op gezet
          hebben. Klik op een foto voor meer informatie.
        </div>
      </div>
      <div className="gallery">
        {walls
          ? walls.map((wall) => {
              return (
                <div
                  className="image"
                  style={{ backgroundImage: `url(${wall.imageUrl})` }}
                  onClick={() =>
                    history.push('/haarlemsemuren/gedichten/' + wall._id)
                  }
                ></div>
              );
            })
          : 'Er is iets misgegaan'}
      </div>
    </div>
  );
};

export default Gedichten;
