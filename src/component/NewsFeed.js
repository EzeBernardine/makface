import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoIosArrowDown,IoIosCart,IoMdClose } from "react-icons/io";
import { FaUserSlash, FaTrash, FaEdit,FaComments,FaHeart,FaShare } from "react-icons/fa";
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/NewsFeed.css'



class NewsFeed extends Component {
  state={
    newsFeedDisplay: undefined
  };
  handleNewsFeedDisplay = ()=>  this.setState(prevState => (
      {newsFeedDisplay: !prevState.newsFeedDisplay}
    ))
  render() {
    let owner = !true;
    let upLoads = [
      {
        name: 'Kings Nduka',
        pImage: require('../image/images.jpeg'),
        image: require('../image/shoe.jpeg'),
        time: '12th Wed - 5pm',
        Location: 'No 5 Igbekwe Street',
        comment: 'Node js File System Module Example Tutorial is today’s leading topic.   The Node.js file system module allows you to work with a file system on your computer. We can include the File System module by using the require() method. ',
        price: '20000',
        sold: true
      },
      {
        name: 'Kings Nduka',
        pImage: require('../image/bag.jpeg'),
        image: require('../image/bag.jpeg'),
        time: '24th Wed - 1pm',
        Location: 'No 5 Olulu Street',
        comment: 'The fs module provides the API for interacting with a file system in a manner closely modeled around standard POSIX functions.',
        price: '200',
        sold: false
      },
      {
        name: 'Aluka Victor',
        pImage: require('../image/female.png'),
        image: require('../image/dress.jpg'),
        time: '24th thurs - 1pm',
        Location: 'WBHE Aba',
        comment: '',
        price: '',
        sold: false
      }
    ]
    return (
      <div className='NewsFeed'>

        {
          upLoads.map(upLoad => (
            <div className='NewsFeed_Container' >
                <div  href='#' className='G_flex  NewsFeed_ProfileAnchor'>
                  <img src={upLoad.pImage} className='NewsFeed_ProfileImage'></img>

                  <div className='name_Date G_smallestFont'>
                    <p>{upLoad.name} <span>{upLoad.time}</span> </p>
                    <p>Location: <span>{upLoad.Location}</span></p>
                  </div>
                  
                  <div href='#' className='dropDownIcon' onClick={this.handleNewsFeedDisplay}><p href='#'><IoIosArrowDown /></p>
                  {this.state.newsFeedDisplay &&
                    <div className='dropDown'>
                      <ul className='G_smallestFont'>
                        {owner ?
                        [<li><a href='#' className='G_BCol'>Delete <FaTrash /></a></li>,
                        <li><a href='#' className='G_BCol'>Edit <FaEdit /></a></li>] :
                        [<li><a href='#' className='G_BCol'>Hide <IoMdClose/></a></li>, 
                          <li><a href='#' className='G_BCol'>Add to Chart <IoIosCart /></a></li>,
                          <li><a href='#' className='G_BCol'>Block user<FaUserSlash /></a></li>]
                        }
                      </ul>
                    </div> 
                  }
                  </div>
                
              </div>

              <div className='NewsFeed_Comment G_smallestFont'>
                <p>{upLoad.comment}</p>
              </div>

              <div className='NewsFeed_Images G_flex'>
                <img src={upLoad.image} className='NewsFeed_Image'></img>
                {upLoad.sold ? <div className='soldUnsold G_flex G_middle G_tooSmallerFont'>Sold</div> : undefined}
              </div>

              <div className='NewsFeed_adoutGoods'>
                <p>${upLoad.price}</p>
              </div>
              
              <div className='NewsFeed_Linkings G_flex G_tooSmallFont'>
                <div>
                  <span className='comments G_dBCol'><FaComments /></span>454121
                </div>
                <div><span className='likes G_dBCol'><FaHeart /></span>515489</div>
                <div><span className='share G_dBCol'><FaShare /></span>2</div>
              </div>

              
            </div>
          ))
        }

      </div>
    );
  }
}

export default NewsFeed;