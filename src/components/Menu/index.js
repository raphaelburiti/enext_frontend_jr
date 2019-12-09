import React from 'react';
import './styles.css';

function Menu() {
  return (
    <div className="menu">
      <nav className="nav">
        <ul>
          <li>Potions<i className="material-icons">arrow_drop_down</i></li>
          <li>Ingredients<i className="material-icons">arrow_drop_down</i></li>
          <li>Books<i className="material-icons">arrow_drop_down</i></li>
          <li>Supplies<i className="material-icons">arrow_drop_down</i></li>
          <li>Charms<i className="material-icons">arrow_drop_down</i></li>
          <li>Clearance!</li>
        </ul>
        <div className="login">
          <button className="btn-sing">Sing In</button>
          <span>or</span>
          <button className="btn-sing">Sing Up</button>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
