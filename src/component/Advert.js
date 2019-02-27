import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdHeart, IoIosPin, IoLogoWhatsapp ,IoLogoTwitter} from "react-icons/io";
import { FaUpload, FaComment,FaUsers ,FaFacebookF,FaCamera} from "react-icons/fa";
import '../styles/Advert.css';
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/IconFooter.css'


class Advert extends Component {
  render() {
    let adverts  = [
      {
        companyName: 'PrideOfAbia',
        logo: require('../image/purpleIcon.jpg'),
        productImage: require('../image/shoe.jpeg'),
        productName: 'Shoe',
        productPrice: '20000',
        comment: 'use a button and change it with appropriate styles. Learn more:',
        link: 'Buy the latest brought avaliable',
      },
      {
        companyName: 'Konga',
        logo: require('../image/blueIcon.jpg'),
        productImage: require('../image/dress.jpg'),
        productName: 'Red gown',
        productPrice: '10000',
        comment: 'Request for your delivery',
        link: 'Buy the latest brought avaliable',
      },
      {
        companyName: 'Infinix',
        logo: require('../image/blackIcon.png'),
        productImage: require('../image/phone.jpeg'),
        productName: 'Infinix 5',
        productPrice: '37000',
        comment: '2GB, avaliablein all colors',
        link: 'Visit our page',
      },
    ]
    return (
      <div className='Advert G_flex'>
      {
        adverts.map(advert => (
          <div className='Advert_main'>
            <div className='Advert_container G_middle'>
              <div className='header G_flex'>
                <p>{advert.companyName}</p>
                <img src={advert.logo} />
              </div>

              <img src={advert.productImage}  className='advertImg'/>

              <div className='comment G_tooSmallFont'>
                <p>{advert.comment}</p>
              </div>

              <div className='footer G_flex G_middle G_tooSmallerFont'>
                <p>{advert.productName}</p>
                <p className='productPrice'>${advert.productPrice}</p>
              </div>
            </div>
            
            <a  href='#"' className='G_tooSmallerFont advertLink G_dBCol'>{advert.link}</a>
          </div>
        ))
      }
      </div>
    );
  }
}


export default Advert;
