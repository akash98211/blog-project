import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
      <>
      <div className="header">
        <div className="logo">
            <NavLink to="#"><span>the</span> <strong>SiRen</strong> </NavLink>
        </div>
        <div className="collapse">
            <span className="navbar-toggler">-</span>
        </div>
          <div className="nav">
            <ul className="nav-items">
              <li className="nav-link">
                <NavLink to="/home" activeClassName="link" >Home</NavLink>
              </li>
              <li className="nav-link">
              <NavLink to="/bollywood" activeClassName="link">Bollywood</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/technology" activeClassName="link">Technology</NavLink>
                 </li>
              <li className="nav-link">
                <NavLink to="/hollywood" activeClassName="link">Hollywood</NavLink>
                 </li>
                <li className="nav-link">
                  <NavLink to="/fitness" activeClassName="link">Fitness</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/food" activeClassName="link">Food</NavLink>
                </li>
              
            </ul>
          </div>
      </div>
      <hr/>
      </>
    )
}

export default Home;
