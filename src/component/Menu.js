import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdNotifications,IoMdCart } from "react-icons/io";
import { FaUpload, FaList } from "react-icons/fa";
import '../styles/Menu.css';
import '../styles/General.css';
import '../styles/Media.css';



class Menu extends Component {
  render() {
    
    let {name,menu, handleHomeDisplay,handleCartDisplay} = this.props;
    
    return (
      <div className='menu_Container G_flex G_middle G_Menu'>
      
        <div  className='G_biggestFont  G_flex ul G_middle '>

          {name? <div><a href='#' className='G_biggestFont   G_subHeaderFontStyle G_appName'>{name}</a></div> : null}
        
          {
            menu[0] === 'Log In to an Existing Account' && menu.length === 1 ?
          <span className='create_sign_account '> <NavLink  exact={true} to="/SignIn" activeClassName="is-active" className='G_smallerFont oneMenu '>{menu}</NavLink></span> : undefined 
          }

          {
            menu[0] === 'Create a New Account' && menu.length === 1 ?
          <span className='create_sign_account '> <NavLink  exact={true} to="/SignUp" activeClassName="is-active" className='G_smallerFont oneMenu '>{menu}</NavLink></span> : undefined
          }
        
          {
            menu && menu.length != 1 ?
            (<ul className='listItems G_smallestFont '> 
              <li onClick={handleHomeDisplay}><a href='#' ><span  className='G_smallerFont'><IoMdNotifications /></span>{menu[0]}</a></li>
              <li><a href='#' ><span  className='G_smallerFont'><IoMdNotifications /></span>{menu[1]}</a></li>
              <li><a href='#' ><span  className='G_smallerFont'><FaList /></span>{menu[2]}</a></li>
              <li onClick={handleCartDisplay}><a href='#' ><span  className='G_smallerFont'><IoMdCart/></span>{menu[3]}</a></li>
            </ul>): undefined
          }

        </div>
              
      </div>
    );
  }
}


export default Menu;
