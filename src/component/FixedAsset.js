import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdCart, IoMdTrash, IoLogoWhatsapp ,IoLogoTwitter} from "react-icons/io";
import { FaUpload, FaComment,FaUsers ,FaFacebookF,FaCamera} from "react-icons/fa";
import '../styles/FixedAsset.css';
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/IconFooter.css'



class FixedAsset extends Component {
 
  render() {
    let FixedAssets  = [
      {
        sellerImg: require('../image/dress.jpg'),
        comment: 'Two story building for rent',
        Location: 'learnfacory',
        price: 3000
      },
      {
        sellerImg: require('../image/images.jpeg'),
        comment: 'Six plot for sell',
        Location: 'Olumba WBHE  Aba',
        price: 3000
      },
      {
        sellerImg: require('../image/female.png'),
        comment: 'Four bed room flat for rent',
        Location: 'learnfacory',
        price: 3000
      },
    ]
    return (
      <div className='FixedAsset_main'>
        {
          FixedAssets.map(FixedAsset => (
            <div className='FixedAsset_container G_flex G_middle'>
              <div>
                <img src={FixedAsset.sellerImg}  className='FixedAsset_img'/>
              </div>

              <div>
                <p className='G_smallestFont FixedAsset_comment'>{FixedAsset.comment}</p>
                <p className='G_tooSmallerFont'>Location: <span className='G_tooSmallerFont FixedAsset_location'>{FixedAsset.Location}</span></p>
                <p className='G_tooSmallerFont'>Price: <span className='G_tooSmallerFont FixedAsset_location'>${FixedAsset.price}</span></p>
              </div>
              
              <div className='FixedAsset_buttonDiv'>
                <button className='G_Btn G_tooSmallerFont FixedAsset_button'> review</button>
              </div>
            </div>
          ))
        }

        <a href='#' className='FisedAsset_viewMore G_tooSmallFont G_BCol'>View more</a>
      </div>
    );
  }
}


export default FixedAsset;
