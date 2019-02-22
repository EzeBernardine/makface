import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoIosArrowDown,IoIosCart,IoMdClose } from "react-icons/io";
import { FaUserSlash, FaTrash, FaEdit } from "react-icons/fa";
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/NewsFeed.css'



class NewsFeed extends Component {
  render() {
    let sold = true;
    let owner = !true
    return (
      <div className='NewsFeed '>

        <div className='NewsFeed_Container ' >
          <div className='NewsFeed_ProfileName'>

            <div  href='#' className='G_flex G_middle NewsFeed_ProfileAnchor'>
              <img src={require('../image/images.jpeg')} className='NewsFeed_ProfileImage'></img>
              <div className='name_Date'>
                <p>Kings Nduka 
                  <span>12th Wed - 5pm</span>
                </p>
                <p>Location: <span>No 5 Igbekwe Street</span></p>
              </div>
              <div href='#' className='dropDownIcon '><a href='#'><IoIosArrowDown /></a>
                <div className='dropDown dropDown_dontDispaly'>
                  <div className='dropDownArrow'></div>
                  <ul>
                    {owner ?
                    [<li>Delete <FaTrash /></li>,
                    <li>Edit <FaEdit /></li>] :
                    [<li>Hide <IoMdClose/></li>, 
                      <li>Add to Chart <IoIosCart /></li>,
                      <li>Block user<FaUserSlash /></li>]
                    }
                  </ul>
                </div>
              </div>
              
            </div>
            
          </div>

          <div className='NewsFeed_Comment'>
            <p>Node js File System Module Example Tutorial is today’s leading topic.   The Node.js file system module allows you to work with a file system on your computer. We can include the File System module by using the require() method. The fs module provides the API for interacting with a file system in a manner closely modeled around standard POSIX functions.</p>
          </div>

          <div className='NewsFeed_Images'>
            {sold ? <div className='soldUnsold G_flex G_middle'>Sold</div> : undefined}
            <img src={require('../image/shoe.jpeg')} className='NewsFeed_Image'></img>
          </div>
          <div className='NewsFeed_adoutGoods'>
          </div>
          <div className='NewsFeed_Linkings'></div>

          
        </div>

      </div>
    );
  }
}

export default NewsFeed;