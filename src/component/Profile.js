import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdHeart, IoIosPin, IoLogoWhatsapp ,IoLogoTwitter} from "react-icons/io";
import { FaUpload, FaComment,FaUsers ,FaFacebookF} from "react-icons/fa";
import '../styles/Profile.css';
import '../styles/General.css';
import '../styles/Media.css';



class Menu extends Component {
  render() {
    let user  = true
    return (
      <div className='profile_container'>

        <div className='ImgDiv  '>
          <a className='imgOverlay'>
            <img src={require('../image/images.jpeg')} />
          </a>
          <div className='seller_BuyerDiv '>
            <div className='G_flex'>
              <p className='seller_Buyer p_font'> <span className='pCheckBox'></span>Seller</p>

              <p className='seller_Buyer p_font'>Buyer</p>
            </div>

            <div className='nationality p_font G_flex'>
              <h3 className='profieIconSize'><IoIosPin /></h3>
              <span>Nigeria</span>
            </div>

 {/* Visible when viewing  others profile          */}
            {user ?<div className='messageDiv G_smallestFont'>
              <NavLink  exact={true} to="/SignIn" activeClassName="is-active" className='G_Btn'> Message </NavLink>
            </div> : undefined}
          </div> 
        </div>

{/* Personal profile and visible to all */}
        <div className='profile_Name  G_smallerFont'>
          <p>Kings Nduka</p>
          <p className='profile_UserName p_font '>KingsNduka</p>
        </div>

        <div className='data '>
          <div className='commentaries G_flex'>
            <div className='eachData G_flex G_middle'>
              <p className='profieIconSize'><IoMdHeart /></p> <span className='p_font'>20</span>
            </div>
            <div className='eachData G_flex G_middle'>
              <p className='profieIconSize'><FaUsers /></p> <span className='p_font'>52</span>
            </div>
            <div className='eachData G_flex G_middle'>
              <p className='profieIconSize'><FaComment /></p> <span className='p_font'>151321325</span>
            </div>
            <div className='eachData G_flex G_middle'>
              <p className='profieIconSize'>< FaUpload /></p> <span className='p_font'>12545446</span>
            </div>
          </div>
        </div>

{/* Location visible to only  other viewers */}
        {user ?<div className='location p_font G_flex'>
            <h3 className='profieIconSize'>Location:</h3>
            <span>No 5 Igbekwe Street</span>
        </div> : undefined}

        <div className='socialMedia G_flex profieIconSize'>
          <span><IoLogoWhatsapp /></span> <span><FaFacebookF/></span> 
          <span><IoLogoTwitter /></span> 
        </div>




      </div>
    );
  }
}


export default Menu;
