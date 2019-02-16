import React, { Component } from 'react';
import { IoMdNotifications,IoIosHome } from "react-icons/io";
import { FaUpload, FaList } from "react-icons/fa";
import '../styles/Menu.css';
import '../styles/General.css';
import '../styles/Media.css';



class Menu extends Component {
  render() {
    
    let {name,menu} = this.props;
    
    return (
      <div className='menu_Container G_flex G_middle G_Menu'>
      
        <div  className='G_biggestFont  G_flex ul G_middle '>

          {name? <div><a href='#' className='G_biggestFont   G_subHeaderFontStyle G_appName'>{name}</a></div> : null}
        
          {menu && menu.length === 1 ?
            <span className='create_sign_account '> <a href='#' className='G_smallerFont oneMenu '>{menu}</a></span> : 
            (<ul className='listItems G_smallestFont '> 
              <li><a href='#' ><span >< IoIosHome /></span>{menu[0]}</a></li> 
              <li><a href='#' ><span ><FaUpload /></span>{menu[1]}</a></li> 
              <li><a href='#' ><span ><IoMdNotifications /></span>{menu[2]}</a></li>
              <li><a href='#' ><span ><FaList /></span>{menu[3]}</a></li>
            </ul>)
          }

        </div>
              
      </div>
    );
  }
}


export default Menu;
