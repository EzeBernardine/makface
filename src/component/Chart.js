import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdCart, IoMdTrash, IoLogoWhatsapp ,IoLogoTwitter} from "react-icons/io";
import { FaUpload, FaComment,FaUsers ,FaFacebookF,FaCamera} from "react-icons/fa";
import '../styles/Chart.css';
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/IconFooter.css'



class Chart extends Component {
   
  
  render() {
    let chart  = [
      {
        img: require('../image/dress.jpg'),
        name: 'Red gown',
        seller: 'Bern',
        Location: 'learnfacory',
        price: 3000,
        sold:  true
      },
      {
        img: require('../image/shoe.jpeg'),
        name: 'Black Shoe',
        seller: 'chidera',
        Location: 'Aba No 2 Okoroama Street',
        price: 9000,
        sold:  false
      },
      {
        img: require('../image/bag.jpeg'),
        name: 'Ash school bag',
        seller: 'George',
        Location: 'umuahia',
        price: 5000,
        sold:  false
      },
      {
        img: require('../image/bag.jpeg'),
        name: 'Ash school bag',
        seller: 'George',
        Location: 'umuahia',
        price: 5000,
        sold:  true
      }
    ]
    return (
      <div className='Cart_main'>
        <p className=' G_dBCol G_subHeaderFont cart'>Cart <span><IoMdCart/></span></p>

        {chart.map((item) =>(
            <div className=' G_flex cart_container G_smBoda'>
              <div className='flexRight G_flex'><img src={item.img} className='cartImage'></img> </div>

              <div className='flexLeft'>
                <p className='G_smallerFont'>{item.name}</p>
                <div className='G_flex location_price G_tooSmallFont'>
                  <p><span  className='priceFontWeight'>Seller: </span><p>{item.seller}</p></p>
                  <p><span  className='priceFontWeight'>Location: </span><p>{item.Location}</p></p>
                  <p className='priceFontWeight'>Price: <p className='G_offCol'>{item.price}</p></p>
                </div>
              </div>

              {item.sold ? <div className='soldUnsold G_flex G_middle G_tooSmallerFont'>Sold</div> : undefined}
              
              <div className='cartOverlay'>
                <a href='#' className=' G_BCol cartTrash'> <IoMdTrash /> </a>
              </div>
            </div>
            )
          )
        }
          
      </div>
    );
  }
}


export default Chart;
