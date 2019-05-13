import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdHeart, IoIosPin, IoLogoWhatsapp ,IoLogoTwitter} from "react-icons/io";
import { FaUpload, FaComment,FaUsers ,FaFacebookF,FaCamera} from "react-icons/fa";
import '../styles/Profile.css';
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/IconFooter.css'



class Menu extends Component {
  render() {

    let {} = this.props;
    let user  = true
    return (
      <div className='profile_container '>
        <div className='profileDiv '>

          <div className='ImgDiv'>
            <a className='img'>
              <img src={require('../image/images.jpeg')} />
              <div className='overlay'>
                <a href='\' className='profileImage G_Position'><FaCamera /></a>
              </div> 
            </a>

            <div className='seller_BuyerDiv'>
              <div className='G_flex'>
                <p className='seller_Buyer p_font '> <span className='pCheckBox G_smBoda' ></span>Seller</p>
                <p className='seller_Buyer p_font G_smBoda'>Buyer</p>
              </div>

              <div className='nationality p_font G_flex G_dBCol'>
                <h3 className='profieIconSize'><IoIosPin /></h3>
                <span>Nigeria</span>
              </div>

  {/* Visible when viewing  others profile          */}
              {user ?<div className='messageDiv G_smallestFont'>
                <NavLink  exact={true} to="/SignIn" activeClassName="is-active" className='G_Btn  '> Message </NavLink>
              </div> : undefined}
            </div> 
          </div>

          <div className='profile_Name  G_smallerFont G_dBCol'>
            <a href='#' className='G_dBCol' onClick={this.props.handleFullProfileDisplay}>Kings Nduka</a>
            <p className='profile_UserName p_font '>KingsNduka</p>
          </div>

          <div className='data'>
            <div className='commentaries G_flex G_BCol'>
              <div className='eachData G_flex G_middle G_smBoda'>
                <p className='profieIconSize'><IoMdHeart /></p> <span className='p_font'>20</span>
              </div>
              <div className='eachData G_flex G_middle G_smBoda'>
                <p className='profieIconSize'><FaUsers /></p> <span className='p_font '>52</span>
              </div>
              <div className='eachData G_flex G_middle G_smBoda G_lgterBck'>
                <p className='profieIconSize'><FaComment /></p> <span className='p_font'>151321325</span>
              </div>
              <div className='eachData G_flex G_middle G_smBoda'>
                <p className='profieIconSize'>< FaUpload /></p> <span className='p_font'>5</span>
              </div>
            </div>
          </div>

  {/* Location visible to only  other viewers */}
          <div className='footer'>
            {
              user ?
              <div className='location p_font G_flex G_middle G_dBCol'>
                  <h3 className='profieIconSize'>Shop  Address:</h3>
                  <span>No 5 Igbekwe Street </span>
              </div> : undefined
            }

           
          </div>



        </div>

      </div>
    );
  }
}


export default Menu;
