import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
// import { IoMdNotifications,IoIosHome } from "react-icons/io";
import { FaSistrix } from "react-icons/fa";
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/SearchBar.css'



class SearchBar extends Component {

  render() {
    return (
      <div className='SearchBar_Container G_flex G_middle G_roundContainer'>

        <form className='SearchInput_Container G_flex G_middle' id= 'nothing'>
         
          <input type="text" placeholder="Search.." className='G_smallerFont input SearchInput' id = 'SearchInput'>
          </input>

          <button  className='G_flex G_middle G_biggestFont  navLinkIcon' ><FaSistrix /> </button>
        </form>

      </div>
    );
  }
}

export default SearchBar;