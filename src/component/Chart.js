import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdCart, IoMdTrash, IoLogoWhatsapp ,IoLogoTwitter} from "react-icons/io";
import { FaUpload, FaComment,FaUsers ,FaFacebookF,FaCamera} from "react-icons/fa";
import '../styles/Chart.css';
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/IconFooter.css'



class Chart extends Component {
    state={
    cartDisplay: undefined
  };
  handleCartDisplay = ()=>  this.setState(prevState => (
      {cartDisplay: !prevState.cartDisplay}
    ))
  
  render() {
    let chart  = [
      {
        img: require('../image/dress.jpg'),
        seller: 'Bern',
        Location: 'learnfacory',
        price: 3000
      },
      {
        img: require('../image/shoe.jpeg'),
        seller: 'chidera',
        Location: 'Aba No 2 Okoroama Street',
        price: 9000
      },
      {
        img: require('../image/bag.jpeg'),
        seller: 'George',
        Location: 'umuahia',
        price: 5000
      },
      {
        img: require('../image/bag.jpeg'),
        seller: 'George',
        Location: 'umuahia',
        price: 5000
      }
    ]
    return (
      <div className='Cart_main'>
        <p className=' G_WCol G_smallestFont cart' onClick={this.handleCartDisplay}>Cart <span><IoMdCart/></span></p>

        {this.state.cartDisplay &&
          chart.map((item) =>(
            <div className=' G_flex G_WCol G_lgterBck G_middle cart_container G_smBoda'>
              <img src={item.img} className='cartImage flexRight'></img>
              <div className='flexLeft'>
                <p className='G_tooSmallFont'>Seller: <span className='G_tooSmallerFont'>{item.seller}</span></p>
                <p className='G_tooSmallFont'>Location <span className='G_tooSmallerFont'>{item.Location}</span></p>
                <p className='G_tooSmallFont price'>Price: <span className='G_tooSmallerFont G_offCol'>{item.price}</span></p>
              </div>
              
              <div className='cartOverlay'>
                <a href='#' className='eachCartImage G_WCol'> <IoMdTrash /> </a>
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
