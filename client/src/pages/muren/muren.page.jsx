import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import './muren.styles.scss';

const Muren = () => {
  const [walls, setWalls] = useState();

  const history = useHistory();

  useEffect(() => {
    axios.get('/api/walls').then((res) => setWalls(res.data));
  }, []);

  return (
    <div className="muren">
      <div className="section">
        <div className="title">Muren</div>
        <div className="paragraph">
          Hier een lijst met alle muren waar we al gedichten op gezet hebben.
          Klik op een foto voor meer informatie.
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
                    history.push('/haarlemsemuren/muren/' + wall._id)
                  }
                ></div>
              );
            })
          : 'Er is iets misgegaan'}
      </div>
    </div>
  );
};

export default Muren;
