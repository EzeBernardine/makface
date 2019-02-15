import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
// import { IoMdNotifications,IoIosHome } from "react-icons/io";
import { FaSistrix } from "react-icons/fa";
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/SearchBar.css'



class searchBar extends Component {
  render() {
    
    return (
      <div className='SearchBar_Container G_flex G_middle '>

        <div className='SearchInput_Container G_flex G_middle '>
          <input type="text" placeholder="Search.." className='G_smallerFont'></input>

          <NavLink  exact={true} to="/Dashboard" className='G_flex G_middle G_biggestFont NavLink' activeClassName="is-active" ><FaSistrix /> </NavLink>
        </div>

      </div>
    );
  }
}

export default searchBar;