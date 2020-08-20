import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="title">Literair Haarlem</div>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/over">Over</Link>
          </li>
          <li>
            <Link to="/agenda">Agenda</Link>
          </li>
          <li>
            <Link to="/haarlemsemuren">Haarlemse Muren</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
